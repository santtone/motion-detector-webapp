import {Injectable} from '@angular/core';
import {UpdateActivatedEvent, UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {SwUpdate} from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class SwUtilsService {

  constructor(private update: SwUpdate) {
  }

  checkUpdates() {
    this.update.available.subscribe((value: UpdateAvailableEvent) => {
      console.log(`Update available. Current version=${value.current.hash}, Available version=${value.available.hash}`);
      this.update.activateUpdate().then(() => {
        console.log('Update activated');
        location.reload();
      });
    });

    this.update.activated.subscribe((value: UpdateActivatedEvent) => {
      console.log(value);
      console.log(`Update activated. New version=${value.current.hash}`);
    });
  }
}
