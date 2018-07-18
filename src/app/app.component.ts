import {Component, OnInit} from '@angular/core';
import {SwUtilsService} from './config/sw-utils.service';
import {WebPushService} from './web-push/services/web-push.service';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web Push';

  constructor(private swUtils: SwUtilsService, private pushService: WebPushService) {
  }

  ngOnInit(): void {
    this.swUtils.checkUpdates();
    this.swUtils.subscribeNotifications();
  }

  sendMessage() {
    this.pushService.sendMessage('Testing Web Push').subscribe();
  }


}
