import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'md-slider',
  templateUrl: './md-slider.component.html',
  styleUrls: ['./md-slider.component.css']
})
export class MdSliderComponent implements OnInit {

  @Input() title: string;
  @Input() min: number;
  @Input() max: number;
  @Input() value: number | string;
  @Output() valueChange: EventEmitter<number | string>;

  constructor() {
    this.valueChange = new EventEmitter<number | string>(null);
  }

  ngOnInit() {
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }

}
