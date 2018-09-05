import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.endpointUrl}/user`;
  }

  get(): Observable<User> {
    return this.http.get(this.url).pipe(
      map(response => Object.assign(new User(), response))
    );
  }
}
