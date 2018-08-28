import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialDesignModule} from '../config/material-design.module';
import {AuthenticationModule} from '../authentication/authentication.module';
import {FormsModule} from '@angular/forms';
import {MoveOnEnterDirective} from '../utils/move-on-enter.directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialDesignModule,
    AuthenticationModule,
    FormsModule,
  ],
  providers: [],
  declarations: [LoginComponent, MoveOnEnterDirective]
})
export class UserModule {
}
