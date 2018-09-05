import {Component, OnInit} from '@angular/core';
import {SwUtilsService} from './config/sw-utils.service';
import {WebPushService} from './web-push/services/web-push.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private swUtils: SwUtilsService, private pushService: WebPushService,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('shield', sanitizer.bypassSecurityTrustResourceUrl('assets/shield.svg'));
    iconRegistry.addSvgIcon('unlock', sanitizer.bypassSecurityTrustResourceUrl('assets/unlock.svg'));
  }

  ngOnInit(): void {
    this.swUtils.checkUpdates();
  }

  sendMessage() {
    this.pushService.sendMessage('Testing Web Push').subscribe();
  }

}
