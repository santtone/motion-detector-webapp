import {Injectable} from '@angular/core';
import {CameraHttpService} from './camera-http.service';
import {Observable} from 'rxjs';
import {StreamToken} from '../stream-token';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  streamToken: StreamToken;

  constructor(private cameraHttpService: CameraHttpService) {
  }

  findStreamToken(): Observable<StreamToken> {
    return this.cameraHttpService.getStreamToken()
      .pipe(
        map((token: StreamToken) => this.streamToken = token)
      );
  }
}
