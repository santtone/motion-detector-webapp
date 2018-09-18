import {Injectable} from '@angular/core';
import {MotionConfig} from '../motion-config';
import {SettingsHttpService} from './settings-http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  motionConfig: BehaviorSubject<MotionConfig>;

  constructor(private settingsHttpService: SettingsHttpService) {
    this.motionConfig = new BehaviorSubject(null);
  }

  restart(): Observable<any> {
    return this.settingsHttpService.restart();
  }

  getMotionConfig(reload?: boolean): Observable<MotionConfig> {
    if (!reload && this.motionConfig.getValue()) {
      return this.motionConfig;
    }
    return this.settingsHttpService.getMotionConfig().pipe(
      map((config: MotionConfig) => {
        this.motionConfig.next(config);
        return config;
      })
    );
  }

  saveMotionConfig(config: MotionConfig): Observable<MotionConfig> {
    return this.settingsHttpService.updateMotionConfig(config).pipe(
      map((saved: MotionConfig) => {
        this.motionConfig.next(saved);
        return config;
      })
    );
  }
}
