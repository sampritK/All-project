import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1Component } from './form1/form1.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    Form1Component,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
