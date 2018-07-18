import {Injectable} from '@angular/core';
import {UpdateActivatedEvent, UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {WebPushService} from '../web-push/services/web-push.service';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {WebPushMessage} from '../web-push/models/web-push-message';

@Injectable({
  providedIn: 'root'
})
export class SwUtilsService {

  message: BehaviorSubject<WebPushMessage>;

  constructor(private swUpdate: SwUpdate, private swPush: SwPush, private pushService: WebPushService) {
    this.message = new BehaviorSubject<WebPushMessage>(null);
  }

  checkUpdates() {
    this.swUpdate.available.subscribe((value: UpdateAvailableEvent) => {
      console.log(`Update available. Current version=${value.current.hash}, Available version=${value.available.hash}`);
      this.swUpdate.activateUpdate().then(() => {
        console.log('Update activated');
        location.reload();
      });
    });
    this.swUpdate.activated.subscribe((value: UpdateActivatedEvent) => {
      console.log(value);
      console.log(`Update activated. New version=${value.current.hash}`);
    });
  }

  subscribeNotifications() {
    if (!environment.production) {
      return;
    }

    this.pushService.startReceivingPushMessages().subscribe((messageStream: BehaviorSubject<WebPushMessage>) => {
      messageStream.subscribe((message: WebPushMessage) => {
        if (message) {
          this.message = new BehaviorSubject<WebPushMessage>(message);
        }
      });
    });
  }
}
