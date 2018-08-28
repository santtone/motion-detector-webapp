import {Directive, HostListener, Input} from '@angular/core';
import {isEqual as _isEqual} from 'lodash';

@Directive({
  selector: '[mdMoveOnEnter]'
})
export class MoveOnEnterDirective {

  @Input() mdMoveOnEnter: string;

  constructor() {
  }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if ((e.which === 13 || e.keyCode === 13)) {
      e.preventDefault();
      const element = document.getElementById(this.mdMoveOnEnter);
      if (_isEqual(element.nodeName, 'BUTTON')) {
        element.click();
      } else {
        element.focus();
      }
      return;
    }

  }

}
