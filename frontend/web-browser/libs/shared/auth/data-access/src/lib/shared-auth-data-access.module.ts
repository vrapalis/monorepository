import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignInService } from './services/sign-in.service';
import { SignUpService } from './services/sign-up.service';
import { ResetPasswordService } from './services/reset-password.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    SignInService,
    SignUpService,
    ResetPasswordService
  ]
})
export class SharedAuthDataAccessModule {
}
