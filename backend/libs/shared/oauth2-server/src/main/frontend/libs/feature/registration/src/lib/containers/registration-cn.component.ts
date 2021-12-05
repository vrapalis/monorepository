import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtilAuthService, SharedUtilFormUtilService } from '@frontend/shared/util';
import { IUserRegistration } from '@frontend/shared/model';

@Component({
  selector: 'frontend-registration-cn',
  template: `
    <frontend-login-form-cn>
      <form [formGroup]='form' (ngSubmit)='onSubmit()'>
        <h1 class='col-12 fs-1 text-opacity-50 text-primary bi-person-plus'>
          <span class='ms-2'>Registration</span>
        </h1>

        <mat-form-field appearance='outline' class='col-12 mt-4'>
          <mat-label>Email</mat-label>
          <input matInput type='email' placeholder='Email' formControlName='email'>
          <mat-icon matSuffix>alternate_email</mat-icon>
          <mat-error *ngIf="form.get('email')?.invalid">{{fUtilService.getEmailErrorMessage(form)}}</mat-error>
        </mat-form-field>

        <mat-form-field appearance='outline' class='col-12 mt-3'>
          <mat-label>Password</mat-label>
          <input matInput type='password' placeholder='Password' formControlName='password'>
          <mat-icon matSuffix>password</mat-icon>
          <mat-error *ngIf="form.get('password')?.invalid">{{fUtilService.getPasswordErrorMessage(form)}}</mat-error>
        </mat-form-field>

        <mat-form-field appearance='outline' class='col-12 mt-3'>
          <mat-label>Password</mat-label>
          <input matInput type='password' placeholder='Password Repeated' formControlName='passwordRepeated'>
          <mat-icon matSuffix>password</mat-icon>
          <mat-error *ngIf="form.get('password')?.invalid">{{fUtilService.getPasswordErrorMessage(form)}}</mat-error>
        </mat-form-field>

        <div class='row mt-3 justify-content-end'>
          <a mat-button color='primary' routerLink='/login' matTooltip='Navigate to login page' class='col-2'>Login</a>
          <button mat-raised-button color='primary' class='col-3 ms-1' type='submit' [disabled]='isFormNotValid()'>
            Submit
          </button>
        </div>
      </form>
    </frontend-login-form-cn>
  `,
  styles: []
})
export class RegistrationCnComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public fUtilService: SharedUtilFormUtilService,
              private authService: SharedUtilAuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  onSubmit() {
    const user = { ...this.form.value } as IUserRegistration;
    this.authService.registration(user);
  }

  isFormNotValid() {
    if(this.form.value.password.length >= 6) {
      return !this.form?.valid  || !(this.form?.value.password === this.form?.value.passwordRepeated);
    } else {
      return true;
    }
  }
}
