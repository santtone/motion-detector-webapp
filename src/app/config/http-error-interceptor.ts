import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {DialogService} from '../dialogs/dialog.service';
import {Router} from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient, private dialog: DialogService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(() => {
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401 || this.router.url.includes('login')) {
            this.dialog.openMessageDialog(
              'Error',
              err.error.message,
              `Details: ${err.error.details || '-'}, Message: ${err.message || '-'}`
            );
          }
        }
      }));
  }
}
