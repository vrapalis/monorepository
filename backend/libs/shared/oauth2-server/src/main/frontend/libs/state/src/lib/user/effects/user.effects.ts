import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap, filter, repeat } from 'rxjs/operators';
import { Observable, EMPTY, of, throwError } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {
  FORGOT_PASSWORD_ACTION,
  FORGOT_PASSWORD_ERROR_ACTION,
  FORGOT_PASSWORD_SUCCESS_ACTION,
  REGISTRATION_ACTION,
  REGISTRATION_CODE_ACTION,
  REGISTRATION_CODE_ERROR_ACTION,
  REGISTRATION_CODE_SUCCESS_ACTION,
  REGISTRATION_ERROR_ACTION,
  REGISTRATION_SUCCESS_ACTION,
  TRY_TO_RECEIVE_TOKEN_ACTION,
  TRY_TO_RECEIVE_TOKEN_ERROR_ACTION,
  TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION
} from '../actions/user.actions';
import { Store } from '@ngrx/store';
import { IUserState } from '@frontend/state';
import { SELECT_USER_STATE } from '../selectors/user.selectors';
import { OAuthService } from 'angular-oauth2-oidc';
import { SharedUtilAuthService, SharedUtilSnackService } from '@frontend/shared/util';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private state: Store<IUserState>,
              private oauthService: OAuthService,
              private authUtilService: SharedUtilAuthService,
              private snackService: SharedUtilSnackService,
              private router: Router) {
  }

  tryToReceiveTokenAction$ = createEffect(() => this.actions$.pipe(
    ofType(TRY_TO_RECEIVE_TOKEN_ACTION),
    map(() => {
      const userIdentityClaims = this.oauthService.getIdentityClaims() as any;
      const userGrantedScopes = this.oauthService.getGrantedScopes() as any;
      if (userIdentityClaims !== null && userGrantedScopes !== null) {
        const { id, sub } = userIdentityClaims;
        return TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION({ user: { id, email: sub, scopes: userGrantedScopes } });
      } else {
        return TRY_TO_RECEIVE_TOKEN_ERROR_ACTION();
      }
    })
  ));

  tryToReceiveTokenSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION)
  ), { dispatch: false });

  tryToReceiveTokenErrorAction$ = createEffect(() => this.actions$.pipe(
    ofType(TRY_TO_RECEIVE_TOKEN_ERROR_ACTION)
  ), { dispatch: false });

  registrationAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_ACTION),
    switchMap(action => this.authUtilService.registration(action.user).pipe(
      map(response => REGISTRATION_SUCCESS_ACTION({ response })),
      catchError(error => of(REGISTRATION_ERROR_ACTION({ response: error.error })))
    ))
  ));

  registrationSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_SUCCESS_ACTION),
    switchMap(action => this.snackService.open(action.response.msg, action.response.detailedMsg)),
    tap(() => this.router.navigate(['/login']))
  ), { dispatch: false });

  registrationErrorAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_ERROR_ACTION),
    tap(action => this.snackService.open(action.response.msg, action.response.detailedMsg))
  ), { dispatch: false });

  registrationCodeAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_CODE_ACTION),
    switchMap(action => this.authUtilService.registrationCode(action.code).pipe(
      map(response => REGISTRATION_CODE_SUCCESS_ACTION({ response })),
      catchError(error => of(REGISTRATION_CODE_ERROR_ACTION({ response: error.error })))
    ))
  ));

  registrationCodeSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_CODE_SUCCESS_ACTION)
  ), { dispatch: false });

  registrationCodeErrorAction$ = createEffect(() => this.actions$.pipe(
    ofType(REGISTRATION_CODE_ERROR_ACTION)
  ), { dispatch: false });

  forgotPasswordAction$ = createEffect(() => this.actions$.pipe(
    ofType(FORGOT_PASSWORD_ACTION),
    switchMap(action => this.authUtilService.forgotPassword(action.email)),
    map(response => FORGOT_PASSWORD_SUCCESS_ACTION()),
    catchError(err => of(FORGOT_PASSWORD_ERROR_ACTION()))
  ));

  forgotPasswordSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(FORGOT_PASSWORD_SUCCESS_ACTION)
  ), { dispatch: false });

  forgotPasswordErrorAction$ = createEffect(() => this.actions$.pipe(
    ofType(FORGOT_PASSWORD_ERROR_ACTION)
  ), { dispatch: false });
}
