import {Injectable} from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User>;

  constructor(private authenticationService: AuthenticationService) {
    this.user = new BehaviorSubject<User>(new User());
  }

  logIn(username: string, password: string): Observable<any> {
    return this.authenticationService.authenticate(username, password)
      .pipe(
        map(() => {
          this.user.next(new User(username));
        })
      );
  }

  logOut(): Observable<any> {
    this.authenticationService.deleteToken();
    return observableOf(null);
  }
}
