import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../toolbar/toolbar.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../user';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private toolbar: ToolbarService, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.toolbar.hideToolbar();
  }

  logIn() {
    this.userService.logIn(this.user.username, this.user.password).subscribe(() => {
      this.router.navigate(['md/camera']);
    });
  }

}
