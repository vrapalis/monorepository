import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignInService } from './services/sign-in.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SignInService]
})
export class SharedAuthDataAccessModule {}
