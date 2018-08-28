import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from './services/authentication.service';
import {AuthenticationHttpService} from './services/authentication-http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationHttpService
  ],
  declarations: []
})
export class AuthenticationModule {
}
