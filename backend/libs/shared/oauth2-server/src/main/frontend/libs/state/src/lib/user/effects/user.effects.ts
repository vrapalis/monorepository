import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap, filter } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {
  TRY_TO_RECEIVE_TOKEN_ACTION,
  TRY_TO_RECEIVE_TOKEN_ERROR_ACTION,
  TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION
} from '../actions/user.actions';
import { Store } from '@ngrx/store';
import { UserState } from '@frontend/state';
import { SELECT_USER_STATE } from '../selectors/user.selectors';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private state: Store<UserState>, private oauthService: OAuthService) {
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
    ofType(TRY_TO_RECEIVE_TOKEN_ERROR_ACTION),
  ), { dispatch: false });
}
