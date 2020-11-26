import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRegRoutingModule } from './log-reg-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LogRegRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogRegModule { }
