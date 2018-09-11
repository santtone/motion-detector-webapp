import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MotionConfig} from '../motion-config';

@Injectable({
  providedIn: 'root'
})
export class SettingsHttpService {

  configUrl: string;
  restartUrl: string;

  constructor(private http: HttpClient) {
    this.configUrl = `${environment.endpointUrl}/motion/config`;
    this.restartUrl = `${environment.endpointUrl}/motion/restart`;
  }

  restart(): Observable<any> {
    return this.http.get(this.restartUrl);
  }

  getMotionConfig(): Observable<MotionConfig> {
    return this.http.get(this.configUrl).pipe(
      map((response: MotionConfig[]) => Object.assign(new MotionConfig(), response))
    );
  }

  updateMotionConfig(config: MotionConfig): Observable<MotionConfig> {
    return this.http.put(this.configUrl, config).pipe(
      map((response: MotionConfig[]) => Object.assign(new MotionConfig(), response))
    );
  }
}
