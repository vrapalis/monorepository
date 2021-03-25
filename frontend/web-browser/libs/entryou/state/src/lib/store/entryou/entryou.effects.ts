import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as EntryouActions from './entryou.actions';
import { CheckInService } from '@web-browser/entryou/data-access';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CHECK_IN_ACTION_SUCCESS } from './entryou.actions';

@Injectable()
export class EntryouEffects {
  constructor(private actions$: Actions, private checkInService: CheckInService) {
  }

  checkInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION),
    switchMap(actionData => this.checkInService.checkIn(actionData.checkInModel)),
    map(serverResponse => CHECK_IN_ACTION_SUCCESS()),
    catchError(err => of(EntryouActions.CHECK_IN_ACTION_FAILURE({ error: err })))
  ));

  checkInSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION_SUCCESS),
    tap(console.log)
  ), { dispatch: false });

  checkInFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION_FAILURE),
    tap(console.error)
  ), { dispatch: false });
}
