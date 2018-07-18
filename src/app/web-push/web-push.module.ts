import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebPushService} from './services/web-push.service';
import {WebPushHttpService} from './services/web-push-http.service';
import {WebPushApi} from './services/web-push-api';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WebPushService,
    WebPushHttpService
  ],
  exports: []
})
export class WebPushModule {
}
