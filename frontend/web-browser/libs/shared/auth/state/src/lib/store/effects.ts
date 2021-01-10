import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginActions } from './actions';
import { tap } from 'rxjs/operators';


@Injectable()
export class Effects {

  constructor(private actions$: Actions) {
  }

  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions),
      tap(value => console.log('Login effect'))
    );
  }, { dispatch: false });

}
