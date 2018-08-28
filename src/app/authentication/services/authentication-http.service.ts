import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Token} from '../token';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpointUrl + '/authenticate';
  }

  authenticate(username: string, password: string): Observable<Token> {
    return this.http.post(this.url, {
      username: username,
      password: password
    }).pipe(map((response) => {
      return Object.assign(new Token(), response);
    }));
  }
}
