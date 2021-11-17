import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { flatMap, map, switchMap, tap } from 'rxjs/operators';

import * as AuthUserActions from '../actions/auth-user.actions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthUserEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  loadAuthUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUserActions.LOAD_AUTH_USER_ACTION),
      switchMap(action => this.http.get('http://127.0.0.1:8080/api/users/security-test', {observe: 'body'})),
      tap(console.log)
    );
  }, { dispatch: false });

}
