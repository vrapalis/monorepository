import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputBusinessRules } from '@web-browser/shared/model';
import { select, Store } from '@ngrx/store';
import { selectAuth, State } from '@web-browser/shared/auth/store';
import { Observable } from 'rxjs';
import { AuthLoginModel } from '@web-browser/shared/auth/model';
import { loginActions } from '../../../../../store/src/lib/actions';

@Component({
  selector: 'web-browser-login',
  template: `
    <form class='form pt-3 pb-5' [formGroup]='form'>
      <mat-form-field class='full-width'>
        <mat-label>Email</mat-label>
        <input class='p-2' matInput #email maxlength='120' placeholder='Your email address' formControlName='email'>
        <mat-hint align='start'><strong>Email address should be min 3 maximal 120 characters</strong></mat-hint>
        <mat-hint align='end'>{{email.value.length}} / 256</mat-hint>
      </mat-form-field>

      <mat-form-field class='full-width pt-5 pb-0'>
        <mat-label>Password</mat-label>
        <input class='p-2' matInput #password maxlength='256' placeholder='Your password' formControlName='password'>
        <mat-hint align='start'><strong>Password should be min 3 maximal 36 characters</strong></mat-hint>
        <mat-hint align='end'>{{password.value.length}} / 36</mat-hint>
      </mat-form-field>

      <div class='text-end mt-5'>
        <sh-ui-flat-button type='primary' [disabled]='!form.valid' (click)='onLogin()'>Login</sh-ui-flat-button>
        <sh-ui-button type='primary' routerLink='../registration'>Registration</sh-ui-button>
      </div>
      {{auth$ | async | json}}
    </form>
  `,
  styles: [`
    .form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
      margin: auto;
    }

    .full-width {
      width: 100%;
    }
  `]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  auth$: Observable<AuthLoginModel>;

  constructor(private fb: FormBuilder, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.initForm();
    this.auth$ = this.store.pipe(select(selectAuth));
  }

  private initForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(InputBusinessRules.email.min),
        Validators.maxLength(InputBusinessRules.email.max)
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(InputBusinessRules.email.min),
        Validators.maxLength(InputBusinessRules.email.max)
      ])
    });
  }

  onLogin() {
    console.log(this.form.getRawValue());
    this.store.dispatch(loginActions({
      user: {
        password: this.form.get('password').value,
        email: this.form.get('email').value
      }
    }));
  }
}
