import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openMessageDialog(title: string, message: string, details: string): Observable<any> {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      data: {title: title, message: message, details: details},
      autoFocus: false,
      backdropClass: 'md-dark-backdrop'
    });
    return dialogRef.afterClosed();
  }
}
