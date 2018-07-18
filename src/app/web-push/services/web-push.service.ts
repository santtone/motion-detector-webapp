import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {WebPushHttpService} from './web-push-http.service';
import {Vapid} from '../models/vapid';
import {WebPushSubscription} from '../models/web-push-subscription';
import {SwPush} from '@angular/service-worker';
import {catchError, flatMap, map} from 'rxjs/operators';
import {WebPushMessage} from '../models/web-push-message';

@Injectable()
export class WebPushService {

  messageStream: BehaviorSubject<WebPushMessage>;
  subscription: WebPushSubscription;

  constructor(private pushHttpService: WebPushHttpService, private swPush: SwPush) {
    this.messageStream = new BehaviorSubject<any>(null);
  }

  startReceivingPushMessages(): Observable<BehaviorSubject<WebPushMessage>> {
    this.swPush.messages.subscribe((message: WebPushMessage) => {
      console.log(`New PushMessage: payload=${message.payload}, date=${message.date}`);
      this.messageStream.next(message);
    });

    return this.findVapidKeys().pipe(
      flatMap((vapid: Vapid) => this.requestSubscription(vapid.publicKey)),
      map(() => this.messageStream));
  }

  stopReceivingPushMessages(): Observable<any> {
    // TODO: cancel subscription
    return null;
  }

  sendMessage(message: string): Observable<any> {
    return this.pushHttpService.sendMessage(message);
  }

  private findVapidKeys(): Observable<Vapid> {
    return this.pushHttpService.getVapidKeys().pipe(map((vapid: Vapid) => {
      return vapid;
    }));
  }

  private requestSubscription(publicVapidKey: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.swPush.requestSubscription({
        serverPublicKey: publicVapidKey
      }).then(value => {
        this.subscription = new WebPushSubscription(value.toJSON().endpoint, value.toJSON().keys.p256dh, value.toJSON().keys.auth);
        this.createSubscription(this.subscription).pipe(catchError(error => {
            observer.error(error);
            console.error(error);
            return error;
          })
        ).subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
      }).catch(error => {
        console.error(error);
        observer.error(error);
      });
    });
  }

  private createSubscription(subscription: WebPushSubscription): Observable<any> {
    return this.pushHttpService.createSubscription(subscription);
  }
}
