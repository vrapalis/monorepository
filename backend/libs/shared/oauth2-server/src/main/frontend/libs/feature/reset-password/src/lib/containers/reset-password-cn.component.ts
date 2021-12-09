import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtilAuthService, SharedUtilFormUtilService } from '@frontend/shared/util';
import { IUserRegistration, IUserResetPassword } from '@frontend/shared/model';
import { ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUserState, RESET_PASSWORD_ACTION } from '@frontend/state';

@Component({
  selector: 'frontend-reset-passoword-cn',
  template: `
    <frontend-login-form-cn>
      <form [formGroup]='form' (ngSubmit)='onSubmit()'>
        <h1 class='col-12 fs-1 text-opacity-50 text-primary bi-key'>
          <span class='ms-2'>Rest Password</span>
        </h1>

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

        <div class='row col-12 mt-3 justify-content-end'>
          <button mat-raised-button color='primary' class='col-6 col-lg-3 ms-1' type='submit' [disabled]='isFormNotValid()'>
            Submit
          </button>
        </div>
      </form>
    </frontend-login-form-cn>
  `,
  styles: []
})
export class ResetPasswordCnComponent implements OnInit, OnDestroy {
  form: FormGroup;
  code$: Observable<string> | undefined;
  subscribeUntil$ = new Subject<void>();

  constructor(private fb: FormBuilder, public fUtilService: SharedUtilFormUtilService, private route: ActivatedRoute,
              private store: Store<IUserState>) {
    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      passwordRepeated: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  ngOnInit(): void {
    this.code$ = this.route.queryParams.pipe(
      filter(params => params.code),
      map(params => params.code),
      takeUntil(this.subscribeUntil$)
    );
  }

  onSubmit() {
    this.code$?.pipe(
      map(code => ({ ...this.form.value, code } as IUserResetPassword)),
      takeUntil(this.subscribeUntil$)
    ).subscribe(resetPassword => this.store.dispatch(RESET_PASSWORD_ACTION({ resetPassword })));
  }

  isFormNotValid() {
    if (this.form.value.password.length >= 6) {
      return !this.form?.valid || !(this.form?.value.password === this.form?.value.passwordRepeated);
    } else {
      return true;
    }
  }

  ngOnDestroy(): void {
    this.subscribeUntil$.next();
    this.subscribeUntil$.complete();
  }
}
