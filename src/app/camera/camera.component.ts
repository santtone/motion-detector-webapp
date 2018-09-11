import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../app-layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../app-layout/toolbar/toolbar-options';
import {CameraService} from './services/camera.service';
import {StreamToken} from './stream-token';
import {environment} from '../../environments/environment';
import {ToolbarAction} from '../app-layout/toolbar/toolbar-action';
import {MatMenu} from '@angular/material';
import {SettingsService} from '../settings/services/settings.service';

@Component({
  selector: 'md-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild('stream') streamElement: ElementRef;
  @ViewChild('cameraMenu') menu: MatMenu;
  streamUrl: string;

  constructor(private router: Router, private toolbar: ToolbarService,
              private cameraService: CameraService, private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Motion Detector', [
      new ToolbarAction(() => {
      }, 'more_vert', this.menu)
    ]));
    this.cameraService.findStreamToken().subscribe((token: StreamToken) => {
      this.streamUrl = `${environment.streamProxyUrl}?token=${token.token}`;
    });
  }

  goToGallery() {
    this.router.navigate(['md/gallery']);
  }

  restart() {
    this.settingsService.restart().subscribe();
  }

  goToSettings() {
    this.router.navigate(['md/settings']);
  }

}
