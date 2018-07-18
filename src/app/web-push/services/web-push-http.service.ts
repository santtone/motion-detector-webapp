import {Injectable} from '@angular/core';
import {Vapid} from '../models/vapid';
import {WebPushSubscription} from '../models/web-push-subscription';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {WebPushApi} from './web-push-api';

@Injectable()
export class WebPushHttpService implements WebPushApi {

  constructor(private http: HttpClient) {
  }

  getVapidKeys(): Observable<Vapid> {
    return this.http.get(environment.endpointUrl + '/webpush/vapid').pipe(map(response => {
      return Object.assign(new Vapid(), response);
    }));
  }

  createSubscription(subscription: WebPushSubscription): Observable<any> {
    return this.http.post(environment.endpointUrl + '/webpush/subscriptions', subscription);
  }

  sendMessage(message: string): Observable<any> {
    return this.http.post(
      environment.endpointUrl + '/webpush/messages',
      {message: message}
    );
  }
}
