import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  signInAction,
  signInFailureAction,
  signInSuccessAction, signOutAction, signUpAction, signUpFailureAction, signUpSuccessAction,
  tryToSignInAction,
  tryToSignInFailureAction,
  tryToSignInSuccessAction
} from './user.actions';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { JwtService } from '@web-browser/shared/auth/util';
import { of } from 'rxjs';
import { SignInService, SignUpService } from '@web-browser/shared/auth/data-access';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';
import { showNotification } from '@web-browser/shared/ui';


@Injectable()
export class UserEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private jwtService: JwtService,
    private signInService: SignInService,
    private uiState: Store<NotificationModel>,
    private signUpService: SignUpService) {
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
      ofType(tryToSignInSuccessAction)
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
      ofType(signInSuccessAction),
      tap(() => this.router.navigate(['/home']))
    );
  }, { dispatch: false });

  signInFailureEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInFailureAction),
      tap(() => this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.ERROR,
          dismiss: 5000,
          title: 'Error',
          text: 'Sign in error.'
        }
      })))
    );
  }, { dispatch: false });

  signOutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signOutAction),
      tap(this.jwtService.deleteJwtToken),
      tap(() => this.router.navigate(['/sign-in']))
    );
  }, { dispatch: false });

  signUpEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpAction),
      switchMap(action => this.signUpService.signUp(action.signUpModel)),
      map(response => signUpSuccessAction()),
      catchError(err => of(signUpFailureAction()))
    );
  });

  signUpSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpSuccessAction),
      tap(() => {
        this.uiState.dispatch(showNotification({
          notification: {
            type: NotificationTypeModel.INFO,
            dismiss: 5000,
            title: 'Success',
            text: 'Sign up success, after confirm the email, you will be able to sign in'
          }
        }));
        this.router.navigate(['/sign-in']);
      })
    );
  }, { dispatch: false });

  signUpFailureEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpFailureAction),
      tap(() => this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.ERROR,
          dismiss: 5000,
          title: 'Error',
          text: 'Sign up error.'
        }
      })))
    );
  }, { dispatch: false });
}
