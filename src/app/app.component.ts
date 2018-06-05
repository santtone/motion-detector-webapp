import {Component, OnInit} from '@angular/core';
import {SwUtilsService} from './config/sw-utils.service';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Motion Detector';

  constructor(private swUtils: SwUtilsService) {
  }

  ngOnInit(): void {
    this.swUtils.checkUpdates();
  }


}
