import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialDesignModule} from '../config/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialDesignModule
  ],
  declarations: [LoginComponent]
})
export class UserModule { }
