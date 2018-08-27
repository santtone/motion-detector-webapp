import {Component, OnInit} from '@angular/core';
import {ToolbarService} from '../../toolbar/toolbar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private toolbar: ToolbarService) {
  }

  ngOnInit() {
    this.toolbar.hideToolbar();
  }

  login() {
    this.router.navigate(['/camera']);
  }

}
