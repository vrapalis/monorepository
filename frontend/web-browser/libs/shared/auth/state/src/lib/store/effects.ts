import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  signInAction, signInFailureAction,
  signInSuccessAction,
  tryToSignInAction,
  tryToSignInFailureAction,
  tryToSignInSuccessAction
} from './actions';
import { catchError, flatMap, map, tap } from 'rxjs/operators';
import { JwtService } from '@web-browser/shared/auth/util';
import { of } from 'rxjs';
import { SignInService } from '@web-browser/shared/auth/data-access';


@Injectable()
export class Effects {

  constructor(
    private actions$: Actions,
    private jwtService: JwtService,
    private signInService: SignInService) {
  }

  tryToSignInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tryToSignInAction),
      flatMap(action => {
        return this.jwtService.createAuthUserFromJwtToken().pipe(
          map(user => tryToSignInSuccessAction({ user })),
          catchError(err => of(tryToSignInFailureAction()))
        );
      })
    );
  });

  tryToSignInSuccessAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tryToSignInSuccessAction),
    );
  }, { dispatch: false });

  tryToSignInFailureAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tryToSignInFailureAction)
    );
  }, { dispatch: false });

  signInEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInAction),
      flatMap(action => this.signInService.signIn(action.signInModel)
        .pipe(
          tap(serverResponse => this.jwtService.saveJwtToken(serverResponse.jwt)),
          flatMap(serverResponse => this.jwtService.createAuthUserFromJwtToken()),
          map(user => {
            return signInSuccessAction({ user });
          }),
          catchError(err => of(signInFailureAction()))
        )
      )
    );
  });

  signInSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInSuccessAction)
    );
  }, { dispatch: false });

  signInFailureEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInFailureAction)
    );
  }, { dispatch: false });

}
