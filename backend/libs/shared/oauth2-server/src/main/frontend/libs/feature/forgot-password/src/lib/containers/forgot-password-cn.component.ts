import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtilFormUtilService } from '@frontend/shared/util';
import { Store } from '@ngrx/store';
import { FORGOT_PASSWORD_ACTION, IUserState } from '@frontend/state';

@Component({
  selector: 'frontend-forgot-password-cn',
  template: `
    <frontend-login-form-cn>
      <form [formGroup]='form' (ngSubmit)='onSubmit()'>
        <h1 class='col-12 fs-1 text-opacity-50 text-primary bi-exclamation-triangle'>
          <span class='ms-2'>Forgot Password</span>
        </h1>

        <mat-form-field appearance='outline' class='col-12 mt-4'>
          <mat-label>Email</mat-label>
          <input matInput type='email' placeholder='Email' formControlName='email'>
          <mat-icon matSuffix>alternate_email</mat-icon>
          <mat-error *ngIf="form.get('email')?.invalid">{{fUtilService.getEmailErrorMessage(form)}}</mat-error>
        </mat-form-field>

        <div class='row col-12 mt-3 justify-content-end'>
          <button mat-raised-button color='primary' class='col-6 col-lg-3 ms-1' type='submit' [disabled]='!form.valid'>Submit
          </button>
        </div>
      </form>
    </frontend-login-form-cn>
  `,
  styles: []
})
export class ForgotPasswordCnComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public fUtilService: SharedUtilFormUtilService, private store: Store<IUserState>) {
    this.form = fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  onSubmit() {
    this.store.dispatch(FORGOT_PASSWORD_ACTION({ email: this.form.value.email }));
  }
}
