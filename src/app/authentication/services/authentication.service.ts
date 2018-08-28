import {Injectable} from '@angular/core';
import {Token} from '../token';
import {environment} from '../../../environments/environment';
import {AuthenticationHttpService} from './authentication-http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenKey: string;

  constructor(private authenticationHttpService: AuthenticationHttpService) {
    this.tokenKey = environment.tokenKey;
  }

  setToken(token: Token) {
    sessionStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getToken(): Token {
    const token = sessionStorage.getItem(this.tokenKey) ? JSON.parse(sessionStorage.getItem(this.tokenKey)) : null;
    return token as Token;
  }

  deleteToken() {
    sessionStorage.setItem(this.tokenKey, '');
  }

  authenticate(username: string, password: string): Observable<Token> {
    return this.authenticationHttpService.authenticate(username, password)
      .pipe(
        map((token: Token) => {
          this.setToken(token);
          return token;
        })
      );
  }

}
