import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../user/user';
import {UserService} from '../user/services/user.service';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'md-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  user: User;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.userService.getUser().subscribe((user: User) => this.user = user);
  }

  navigateToCamera() {
    this.router.navigate(['md/camera']);
    this.sidenav.close();
  }

  navigateToGallery() {
    this.router.navigate(['md/gallery']);
    this.sidenav.close();
  }

  logOut() {
    this.router.navigate(['login']);
    this.userService.logOut();
  }

}
