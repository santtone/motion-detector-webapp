import {Component, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user/services/user.service';

@Component({
  selector: 'md-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.userService.user.subscribe((user: User) => this.user = user);
  }

}
