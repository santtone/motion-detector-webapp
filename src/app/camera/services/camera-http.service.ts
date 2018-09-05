import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {File} from '../../gallery/file/file';
import {map} from 'rxjs/operators';
import {StreamToken} from '../stream-token';

@Injectable({
  providedIn: 'root'
})
export class CameraHttpService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.endpointUrl}/stream`;
  }

  getStreamToken(): Observable<StreamToken> {
    return this.http.get(this.url + '/token').pipe(
      map((response: StreamToken) => Object.assign(new StreamToken(), response))
    );
  }
}
