import {Component, OnInit} from '@angular/core';
import {ToolbarOptions} from '../app-layout/toolbar/toolbar-options';
import {ToolbarService} from '../app-layout/toolbar/toolbar.service';
import {SettingsService} from './services/settings.service';
import {MotionConfig} from './motion-config';
import {Location} from '@angular/common';

@Component({
  selector: 'md-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  motionConfig: MotionConfig;
  resolutions: any[];
  selectedResolution: string[];

  constructor(private toolbar: ToolbarService, private settings: SettingsService, private location: Location) {
    this.resolutions = [['640', '480'], ['1280', '720'], ['1640', '1232'], ['1920', '1080']];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Settings'));
    this.settings.getMotionConfig().subscribe((config: MotionConfig) => {
      this.motionConfig = config;
      this.selectedResolution = this.resolutions.find((r) => r[0] == config.captureWidth && r[1] == config.captureHeight);
    });
  }

  save() {
    this.motionConfig.captureWidth = this.selectedResolution[0];
    this.motionConfig.captureHeight = this.selectedResolution[1];
    this.settings.saveMotionConfig(this.motionConfig).subscribe(() => {
      this.location.back();
    });
  }

}
