import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as EntryouActions from './private.actions';
import { CheckInService, CheckOutService } from '@web-browser/entryou/data-access';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  CHECK_IN_ACTION_FAILURE,
  CHECK_IN_ACTION_SUCCESS,
  CHECK_IN_FROM_LOCAL_STORAGE,
  CHECK_OUT_ACTION, CHECK_OUT_FAILURE_ACTION, CHECK_OUT_SUCCESS_ACTION
} from './private.actions';
import { CheckInUtilService } from '@web-browser/entryou/utils';

@Injectable()
export class PrivateEffects {
  constructor(private actions$: Actions, private checkInService: CheckInService,
              private checkInUtil: CheckInUtilService, private checkOut: CheckOutService) {
  }

  tryToCheckInFromLocalStorageEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_IN_FROM_LOCAL_STORAGE),
    switchMap(action => this.checkInUtil.readPrivateStateFromLocalStorage()),
    map(privateState => CHECK_IN_ACTION_SUCCESS({
      serverResponse: {
        msg: null,
        detailedErrorMsg: null,
        info: privateState.info,
        lastCheckIn: privateState.lastCheckIn
      }
    })),
    catchError(error => of(CHECK_IN_ACTION_FAILURE({ error })))
  ));

  checkInEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION),
    switchMap(actionData => this.checkInService.checkIn(actionData.checkInModel)),
    map(serverResponse => CHECK_IN_ACTION_SUCCESS({ serverResponse })),
    catchError(err => of(EntryouActions.CHECK_IN_ACTION_FAILURE({ error: err })))
  ));

  checkInSuccessEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION_SUCCESS),
    switchMap(data => this.checkInUtil.savePrivateStateToLocalStorage({
      checkedIn: true,
      lastCheckIn: data.serverResponse.lastCheckIn,
      info: data.serverResponse.info
    })),
    catchError(error => of(CHECK_IN_ACTION_FAILURE({ error })))
  ), { dispatch: false });

  checkInFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION_FAILURE, CHECK_OUT_FAILURE_ACTION),
    tap(console.error)
  ), { dispatch: false });

  checkOutActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_OUT_ACTION),
    switchMap(action => this.checkOut.checkOut(action.checkIn)),
    map(serverResponse => CHECK_OUT_SUCCESS_ACTION()),
    catchError(error => of(CHECK_OUT_FAILURE_ACTION({ error })))
  ));

  checkOutSuccessActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_OUT_SUCCESS_ACTION)
  ), { dispatch: false });
}
