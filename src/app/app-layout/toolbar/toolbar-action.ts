import {MatMenu} from '@angular/material';

export class ToolbarAction {
  action: any;
  icon: string;
  menuToBeTriggered?: MatMenu;

  constructor(action: any, icon: string, menuToBeTriggered?: MatMenu) {
    this.action = action;
    this.icon = icon;
    this.menuToBeTriggered = menuToBeTriggered;
  }

  runAction(): void {
    this.action();
  }
}
