import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  LOAD_CLIENT_PROVIDERS_ACTION,
  LOAD_CLIENT_PROVIDERS_ERROR_ACTION,
  LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION
} from '../actions/client.actions';
import { ClientService } from '@frontend/shared/data-access';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ClientEffects {

  constructor(private actions$: Actions, private cService: ClientService) {
  }

  loadClintProvidersAction$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_CLIENT_PROVIDERS_ACTION),
    switchMap(action => this.cService.getProviders().pipe(
      map(provider => LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION({ provider })),
      catchError(error => of(LOAD_CLIENT_PROVIDERS_ERROR_ACTION({ error })))
    ))
  ));

  loadClintProvidersSuccessAction$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION)
  ), { dispatch: false });

  loadClintProvidersErrorAction$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_CLIENT_PROVIDERS_ERROR_ACTION)
  ), { dispatch: false });

}
