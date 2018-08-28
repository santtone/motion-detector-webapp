import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from '../toolbar/toolbar.service';
import {ToolbarOptions} from '../toolbar/toolbar-options';

@Component({
  selector: 'md-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router, private toolbar: ToolbarService) {
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Motion Detector'));
  }

  goToGallery() {
    this.router.navigate(['md/gallery']);
  }

}
