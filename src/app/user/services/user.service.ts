import {Injectable} from '@angular/core';
import {AuthenticationService} from '../../authentication/services/authentication.service';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../user';
import {UserHttpService} from './user-http.service';
import * as _ from 'lodash';
import {SwUtilsService} from '../../config/sw-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User>;

  constructor(private authenticationService: AuthenticationService, private userHttpService: UserHttpService) {
    this.user = new BehaviorSubject<User>(new User());
  }

  logIn(username: string, password: string): Observable<User> {
    return this.authenticationService.authenticate(username, password)
      .pipe(
        mergeMap(() => this.getUser())
      );
  }

  logOut(): Observable<any> {
    this.authenticationService.deleteToken();
    return observableOf(null);
  }

  getUser(): Observable<User> {
    if (!_.some(this.user.getValue(), _.isEmpty)) {
      return this.user;
    } else {
      return this.userHttpService.get().pipe(
        map((user: User) => {
          this.user.next(user);
          return user;
        })
      );
    }
  }

}
