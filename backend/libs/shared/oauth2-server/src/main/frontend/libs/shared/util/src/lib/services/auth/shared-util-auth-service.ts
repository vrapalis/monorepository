import { Injectable } from '@angular/core';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { TRY_TO_RECEIVE_TOKEN_ACTION, UserState } from '@frontend/state';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IUserRegistration } from '@frontend/shared/model';
import { SharedUtilEnvService } from '../env/shared-util-env.service';
import { SharedUtilSnackService } from '../snack/shared-util-snack.service';
import { Router } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilAuthService {

  constructor(private oauthService: OAuthService, private state: Store<UserState>,
              private http: HttpClient, private envService: SharedUtilEnvService,
              private snackBarUtilService: SharedUtilSnackService, private router: Router) {
  }

  public onOAuthEvents() {
    this.oauthService.events
      .subscribe(event => {
        console.log(event);
        switch (event.type) {
          case 'token_received':
            this.state.dispatch(TRY_TO_RECEIVE_TOKEN_ACTION());
            return;
          case 'discovery_document_loaded':
            if (event instanceof OAuthSuccessEvent) {
              if (event.info !== null) {
                this.state.dispatch(TRY_TO_RECEIVE_TOKEN_ACTION());
              }
            }
            return;
          default:
            return;
        }
      });
  }

  registration(user: IUserRegistration) {
    if (user.email !== null && user.password !== null && user.passwordRepeated !== null) {
      const payload = new HttpParams()
        .set('email', user.email)
        .set('password', user.password)
        .set('passwordRepeated', user.passwordRepeated);

      const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(`${this.envService.env.host}/registration`, payload.toString(), { headers })
        .pipe(
          switchMap(response => this.snackBarUtilService.open('Success', 'You should receive the message.')),
          tap(() => {
            this.router.navigate(['/home']);
          }),
          catchError(err => this.snackBarUtilService.open('Error', 'Registration failed.'))
        )
        .subscribe();
    }
  }

  forgotPassword(email: string) {
    console.log(email);
  }

  resetPassword(password: string) {
    console.log(password);
  }
}