import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {Token} from './token';
import {AuthenticationService} from './services/authentication.service';
import {flatMap, catchError, tap} from 'rxjs/operators';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  private authenticationUrl: string;
  tokenRefreshAttempts = 0;

  private static requestWithAuthorizationHeader(request: HttpRequest<any>, token: Token) {
    return request.clone({headers: request.headers.set('Authorization', token.tokenType + ' ' + token.token)});
  }

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationUrl = environment.endpointUrl + '/authenticate';
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone();
    let event: Observable<HttpEvent<any>>;
    const token = this.authenticationService.getToken();
    if (token) {
      event = next.handle(HttpAuthInterceptor.requestWithAuthorizationHeader(req, token));
    } else {
      event = next.handle(req);
    }
    return this.handleHttpEvent(event, req, next);
  }

  private handleHttpEvent(event: Observable<HttpEvent<any>>, request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return event.pipe(
      tap((httpEvent: HttpEvent<any>) => {
        return httpEvent;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 200) {
            return event;
          }
          const doTokenRefresh = error.status === 401 && this.authenticationService.getToken()
            && this.tokenRefreshAttempts < 2 && !this.router.url.includes('login');

          if (doTokenRefresh) {
            this.tokenRefreshAttempts++;
            return this.refreshTokenAndReSend(request, next);
          } else {
            // TODO: handle errors
            // console.log(error);
          }
        }
        this.tokenRefreshAttempts = 0;
        return throwError(error);
      }));
  }

  private refreshTokenAndReSend(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    return this.http.post(this.authenticationUrl + '/token', {
      refreshToken: token.refreshToken,
      resource: token.resource
    }).pipe(
      flatMap(response => {
        const newToken = Object.assign(new Token(), response);
        this.authenticationService.setToken(newToken);
        return this.intercept(request, next);
      }),
      catchError(() => {
        return this.intercept(request, next);
      }));
  }
}
