import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'md-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToGallery() {
    this.router.navigate(['gallery']);
  }

}
