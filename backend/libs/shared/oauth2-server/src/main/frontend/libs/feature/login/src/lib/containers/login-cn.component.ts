import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'frontend-login-cn',
  template: `
    <frontend-login-form-cn>
      <form [formGroup]='form' (ngSubmit)='onSubmit()'>
        <h1 class='col-12 fs-1 text-opacity-50 text-primary bi-door-open'>
          <span class='ms-2'>Login</span>
        </h1>

        <mat-form-field appearance='outline' class='col-12 mt-4'>
          <mat-label>Email</mat-label>
          <input matInput type='email' placeholder='Email' formControlName='email'>
          <mat-icon matSuffix>alternate_email</mat-icon>
          <mat-error *ngIf="form.get('email')?.invalid">{{getEmailErrorMessage()}}</mat-error>
        </mat-form-field>

        <mat-form-field appearance='outline' class='col-12 mt-3'>
          <mat-label>Password</mat-label>
          <input matInput type='password' placeholder='Password' formControlName='password'>
          <mat-icon matSuffix>password</mat-icon>
          <mat-error *ngIf="form.get('password')?.invalid">{{getPasswordErrorMessage()}}</mat-error>
        </mat-form-field>

        <div class='row mt-3 justify-content-end'>
          <a mat-button color='primary' routerLink='/registration' matTooltip='Navigate to registration page'
             class='col-2'>Registration</a>
          <button mat-raised-button color='primary' class='col-3 ms-1' type='submit' [disabled]='!form.valid'>Submit</button>
        </div>
        
        <div class='row justify-content-end mt-3'>
          <a mat-button color='accent' routerLink='/forgot-password' matTooltip='Navigate to forgot password page'
             class='col-2'>Forgot Password</a>
        </div>

        <div class='row mt-4 justify-content-end'>
          <a mat-icon-button matTooltip="Login with Google" href='/oauth2/authorization/google' 
             class='sn-icon col-1 bi-google text-primary fs-2'></a>
          <a mat-icon-button matTooltip="Login with Facebook" href='/oauth2/authorization/facebook' 
             class='sn-icon col-1 bi-facebook text-info fs-2 ms-3'></a>
          <a mat-icon-button matTooltip="Login with Microsoft" href='/oauth2/authorization/azuread' 
             class='sn-icon col-1 bi-microsoft text-success fs-2 ms-3'></a>
          <a mat-icon-button matTooltip="Login with Github" href='/oauth2/authorization/github' 
             class='sn-icon col-1 bi-github text-black fs-2 ms-3'></a>
        </div>
      </form>
    </frontend-login-form-cn>
  `,
  styles: [`
      .sn-icon:hover {
          font-size: 2.5em !important;
          transition: 0.1s all ease-in;
      }
  `]
})
export class LoginCnComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.maxLength(12), Validators.required]]
    });
  }

  onSubmit() {
    const payload = new HttpParams()
      .set('email', this.form.value.email)
      .set('password', this.form.value.password);
    this.http.post('http://127.0.0.1:8080/login', payload.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(console.log, err => {
      if (err.url) {
        window.location.href = err.url;
      }
    });
  }

  getEmailErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.form.get('email')?.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }

  getPasswordErrorMessage() {
    if (this.form.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.form.get('password')?.hasError('minlength')) {
      return 'Should be min 6 length';
    }

    if (this.form.get('password')?.hasError('maxlength')) {
      return 'Should be max 12 length';
    }

    return '';
  }
}
