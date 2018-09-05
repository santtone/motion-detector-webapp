import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../app-layout/toolbar/toolbar.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../user';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any;
  isLoading: boolean;

  constructor(private router: Router, private toolbar: ToolbarService, private userService: UserService) {
    this.isLoading = false;
    this.credentials = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
    this.toolbar.hideToolbar();
  }

  logIn() {
    this.isLoading = true;
    this.userService.logIn(this.credentials.username, this.credentials.password)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(() => {
        this.router.navigate(['md/camera']);
      });
  }

}
