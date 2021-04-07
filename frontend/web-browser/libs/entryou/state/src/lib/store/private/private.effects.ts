import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as EntryouActions from './private.actions';
import {
  CHECK_IN_ACTION_FAILURE,
  CHECK_IN_ACTION_SUCCESS,
  CHECK_IN_FROM_LOCAL_STORAGE,
  CHECK_OUT_ACTION,
  CHECK_OUT_FAILURE_ACTION,
  CHECK_OUT_SUCCESS_ACTION,
  GET_PAGED_CHECK_INS_ACTION,
  GET_PAGED_CHECK_INS_FAILURE_ACTION,
  GET_PAGED_CHECK_INS_SUCCESS_ACTION
} from './private.actions';
import { CheckInService, CheckOutService } from '@web-browser/entryou/data-access';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CheckInUtilService } from '@web-browser/entryou/utils';
import { Store } from '@ngrx/store';
import { NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';
import { showNotification } from '@web-browser/shared/ui';

@Injectable()
export class PrivateEffects {
  constructor(private actions$: Actions, private checkInService: CheckInService,
              private checkInUtil: CheckInUtilService, private checkOut: CheckOutService,
              private state: Store<NotificationModel>) {
  }

  tryToCheckInFromLocalStorageEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_IN_FROM_LOCAL_STORAGE),
    switchMap(action => this.checkInUtil.readPrivateStateFromLocalStorage()),
    filter(privateState => privateState !== null),
    map(privateState => {
      if (privateState) {
        return CHECK_IN_ACTION_SUCCESS({
          serverResponse: {
            msg: null,
            detailedErrorMsg: null,
            info: privateState.info,
            lastCheckIn: privateState.lastCheckIn
          }
        });
      }
    })
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
    tap(() => this.state.dispatch(showNotification({
      notification: {
        title: 'Success',
        text: 'Checkin success.',
        isShown: true,
        dismiss: 5000,
        type: NotificationTypeModel.SUCCESS
      }
    }))),
    catchError(error => of(CHECK_IN_ACTION_FAILURE({ error })))
  ), { dispatch: false });

  checkInFailureEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.CHECK_IN_ACTION_FAILURE, CHECK_OUT_FAILURE_ACTION),
    tap(error => this.state.dispatch(showNotification({
      notification: {
        title: 'Error',
        text: 'Something gone wrong, try it later.',
        isShown: true,
        dismiss: 5000,
        type: NotificationTypeModel.ERROR
      }
    }))),
    tap(error => console.error(error))
  ), { dispatch: false });

  checkOutActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_OUT_ACTION),
    switchMap(action => this.checkOut.checkOut(action.checkIn)),
    map(serverResponse => CHECK_OUT_SUCCESS_ACTION()),
    catchError(error => of(CHECK_OUT_FAILURE_ACTION({ error })))
  ));

  checkOutSuccessActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(CHECK_OUT_SUCCESS_ACTION),
    switchMap(() => this.checkInUtil.clear()),
    tap(action => this.state.dispatch(showNotification({
      notification: {
        title: 'Success',
        text: 'Checkout success.',
        isShown: true,
        dismiss: 5000,
        type: NotificationTypeModel.SUCCESS
      }
    })))
  ), { dispatch: false });

  getPagedCheckInsActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.GET_PAGED_CHECK_INS_ACTION),
    switchMap(action => this.checkInService.getPagedCheckIn({ guestId: action.page.guestId, page: action.page.page })),
    map(paged => GET_PAGED_CHECK_INS_SUCCESS_ACTION({ pagedResponse: paged })),
    catchError(error => of(GET_PAGED_CHECK_INS_FAILURE_ACTION({ error })))
  ));

  getPagedCheckInsSuccessActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.GET_PAGED_CHECK_INS_SUCCESS_ACTION)
  ), { dispatch: false });

  getPagedCheckInsFailureActionEffect$ = createEffect(() => this.actions$.pipe(
    ofType(EntryouActions.GET_PAGED_CHECK_INS_FAILURE_ACTION),
  ), { dispatch: false });
}
