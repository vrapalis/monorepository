import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthUserActions from '../actions/auth-user.actions';


@Injectable()
export class AuthUserEffects {

  loadAuthUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthUserActions.loadAuthUsers),
      tap(action => console.log(action))
    );
  }, { dispatch: false });


  constructor(private actions$: Actions) {
  }

}
