import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loginAction, loginErrorAction, loginSuccessAction} from "../actions/user.action";
import {AuthService} from "@web/oauth2-shared-utility";
import {catchError, map, of, switchMap, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class UserEffect {

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }

  loginActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(action => this.authService.login().pipe(
      catchError(err => throwError(() => err))
    )),
    map(user => loginSuccessAction({user})),
    catchError(err => of(loginErrorAction(err)))
  ));

  loginSuccessActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
  ), {dispatch: false});

  loginErrorActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loginErrorAction),
    tap(console.error),
    tap(()=> this.router.navigate(['/service-unavailable']))
  ), {dispatch: false});
}
