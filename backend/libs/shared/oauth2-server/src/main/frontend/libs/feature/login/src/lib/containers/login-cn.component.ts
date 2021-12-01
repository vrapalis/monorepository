import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'frontend-login-cn',
  template: `
    <form class='row justify-content-end mt-5' [formGroup]='form' (ngSubmit)='onSubmit()'>
      <h1>Login</h1>
      
      <mat-form-field appearance='outline' class='col-12'>
        <mat-label>Email</mat-label>
        <input matInput type='email' placeholder='Email' formControlName='email'>
        <mat-icon matSuffix>email</mat-icon>
        <mat-hint>Hint</mat-hint>
      </mat-form-field>

      <mat-form-field appearance='outline' class='col-12'>
        <mat-label>Password</mat-label>
        <input matInput type='password' placeholder='Password' formControlName='password'>
        <mat-icon matSuffix>Password</mat-icon>
        <mat-hint>Hint</mat-hint>
      </mat-form-field>

      <button mat-raised-button color='primary' class='col-3 mt-3' type='submit' [disabled]="!form.valid">Submit</button>
      <a href='/oauth2/authorization/google'>Google</a>
    </form>
  `,
  styles: [`
      form {
          width: 50%;
          margin: auto;
      }
  `]
})
export class LoginCnComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.maxLength(6), Validators.maxLength(12), Validators.required]]
    });
  }

  onSubmit() {
    const payload = new HttpParams()
      .set('email', this.form.value.email)
      .set('password', this.form.value.password);
    this.http.post('/login', payload.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(console.log, err => {
      if(err.url) {
        window.location.href = err.url;
      }
    })
  }
}
