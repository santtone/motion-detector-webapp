import {Observable} from 'rxjs';
import {Vapid} from '../models/vapid';
import {WebPushSubscription} from '../models/web-push-subscription';

export interface WebPushApi {
  getVapidKeys(): Observable<Vapid>;
  createSubscription(subscription: WebPushSubscription): Observable<any>;
  sendMessage(message: string): Observable<any>;
}
