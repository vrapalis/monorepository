import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  resetPasswordAction,
  resetPasswordConfirmAction, resetPasswordConfirmFailureAction,
  resetPasswordConfirmSuccessAction,
  resetPasswordFailureAction,
  resetPasswordSuccessAction,
  signInAction,
  signInFailureAction,
  signInSuccessAction,
  signOutAction,
  signUpAction,
  signUpConfirmAction,
  signUpConfirmFailureAction,
  signUpConfirmSuccessAction,
  signUpFailureAction,
  signUpSuccessAction,
  tryToSignInAction,
  tryToSignInFailureAction,
  tryToSignInSuccessAction
} from './user.actions';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { JwtService } from '@web-browser/shared/auth/util';
import { of } from 'rxjs';
import { ResetPasswordService, SignInService, SignUpService } from '@web-browser/shared/auth/data-access';
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
    private signUpService: SignUpService,
    private resetPasswordService: ResetPasswordService) {
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
            type: NotificationTypeModel.SUCCESS,
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

  signUpConfirmEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpConfirmAction),
    switchMap(action => this.signUpService.signUpConfirm(action.id)),
    map(serverResponse => signUpConfirmSuccessAction({ serverResponse })),
    catchError(error => of(signUpConfirmFailureAction({ error })))
  ));

  signUpConfirmSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpConfirmSuccessAction),
    tap((action) => {
      this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.SUCCESS,
          dismiss: 5000,
          title: 'Success',
          text: action.serverResponse.msg
        }
      }));
      this.router.navigate(['/sign-in']);
    })
  ), { dispatch: false });

  signUpConfirmFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(signUpConfirmFailureAction),
    tap((action) => {
      this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.ERROR,
          dismiss: 5000,
          title: action.error.msg,
          text: action.error.detailedErrorMsg
        }
      }));
      this.router.navigate(['/sign-in']);
    })
  ), { dispatch: false });

  resetPasswordEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordAction),
    switchMap(action => this.resetPasswordService.reset(action.email)),
    map(serverResponse => resetPasswordSuccessAction({ serverResponse })),
    catchError(error => of(resetPasswordFailureAction({ serverResponse: error.error })))
  ));

  resetPasswordSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordSuccessAction),
    tap(action => {
      this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.SUCCESS,
          dismiss: 5000,
          title: 'Success',
          text: action.serverResponse.msg
        }
      }));
      this.router.navigate(['/sign-in']);
    })), { dispatch: false });

  resetPasswordFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordFailureAction),
    tap(console.log),
    tap(action => this.router.navigate(['/sign-in'])
      .then(() => this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.ERROR,
          dismiss: 5000,
          title: action.serverResponse.msg,
          text: action.serverResponse.detailedErrorMsg
        }
      }))))
  ), { dispatch: false });

  resetPasswordConfirmEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordConfirmAction),
    switchMap(action => this.resetPasswordService.resetConfirm(action.model)),
    map(serverResponse => resetPasswordConfirmSuccessAction({ serverResponse })),
    catchError(error => of(resetPasswordConfirmFailureAction({ serverResponse: error.error })))
  ));

  resetPasswordConfirmSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordConfirmSuccessAction),
    tap(action => this.router.navigate(['/sign-in'])
      .then(() => this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.SUCCESS,
          dismiss: 5000,
          title: 'Success',
          text: action.serverResponse.msg
        }
      }))))
  ), { dispatch: false });

  resetPasswordConfirmFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordConfirmFailureAction),
    tap(action => this.router.navigate(['/sign-in'])
      .then(() => this.uiState.dispatch(showNotification({
        notification: {
          type: NotificationTypeModel.ERROR,
          dismiss: 5000,
          title: action.serverResponse.msg,
          text: action.serverResponse.detailedErrorMsg
        }
      }))))
  ), { dispatch: false });
}
