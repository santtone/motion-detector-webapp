import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToolbarService} from './toolbar.service';
import {ToolbarOptions} from './toolbar-options';
import {Location} from '@angular/common';

@Component({
  selector: 'md-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<any>;
  options: ToolbarOptions;

  constructor(private toolbar: ToolbarService, private location: Location) {
    this.menuClick = new EventEmitter<any>();
  }

  ngOnInit() {

    this.toolbar.getToolbarOptions().subscribe((options: ToolbarOptions) => {
      this.options = options;
      console.log(this.options);
    });

  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onNavigateBack() {
    this.location.back();
  }

}
