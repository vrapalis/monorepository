import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignInService } from './services/sign-in.service';
import { SignUpService } from './services/sign-up.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SignInService, SignUpService]
})
export class SharedAuthDataAccessModule {}
