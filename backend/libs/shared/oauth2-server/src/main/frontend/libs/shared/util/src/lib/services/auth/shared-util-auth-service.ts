import { Injectable } from '@angular/core';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { TRY_TO_RECEIVE_TOKEN_ACTION, IUserState } from '@frontend/state';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { IServerResponse, IUser, IUserRegistration, IUserResetPassword } from '@frontend/shared/model';
import { SharedUtilEnvService } from '../env/shared-util-env.service';
import { SharedUtilSnackService } from '../snack/shared-util-snack.service';
import { Router } from '@angular/router';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilAuthService {

  constructor(private oauthService: OAuthService, private state: Store<IUserState>,
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

  registration(user: IUserRegistration): Observable<IServerResponse> {
    return this.http.post<IServerResponse>(`${this.envService.env.host}/api/users/registration`, user, { observe: 'body' });
  }

  forgotPassword(email: string): Observable<IServerResponse> {
    const forgotPasswordDao = { email };
    return this.http.post<IServerResponse>(`${this.envService.env.host}/api/users/forgot-password`, forgotPasswordDao, { observe: 'body' });
  }

  resetPassword(resetPasswordDto: IUserResetPassword): Observable<IServerResponse> {
    return this.http.put<IServerResponse>(`${this.envService.env.host}/api/users/reset-password`, resetPasswordDto, { observe: 'body' });
  }

  registrationCode(code: string): Observable<IServerResponse> {
    const body = { code };
    return this.http.put<IServerResponse>(`${this.envService.env.host}/api/users/registration`, body, { observe: 'body' });
  }

}
