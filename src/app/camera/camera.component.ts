import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../toolbar/toolbar.service';
import {ToolbarOptions} from '../toolbar/toolbar-options';
import {CameraService} from './services/camera.service';
import {StreamToken} from './stream-token';
import {environment} from '../../environments/environment';

@Component({
  selector: 'md-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild('stream') streamElement: ElementRef;
  streamUrl: string;

  constructor(private router: Router, private toolbar: ToolbarService, private cameraService: CameraService) {
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Motion Detector'));
    this.cameraService.findStreamToken().subscribe((token: StreamToken) => {
      this.streamUrl = `${environment.streamProxyUrl}?token=${token.token}`;
    });
  }

  goToGallery() {
    this.router.navigate(['md/gallery']);
  }

}
