import { createReducer, on } from '@ngrx/store';
import { IClientProvider } from '@frontend/shared/model';
import { LOAD_CLIENT_PROVIDERS_ERROR_ACTION, LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION } from '../actions/client.actions';

export const clientFeatureKey = 'client';

export interface IClientState {
  providers: Array<IClientProvider>;
}

export const clientInitialState: IClientState = {
  providers: []
};

export const clientReducer = createReducer(
  clientInitialState,
  on(LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION, (state, action) => ({ ...state, providers: action.provider })),
  on(LOAD_CLIENT_PROVIDERS_ERROR_ACTION, (state, action) => ({ ...state, providers: clientInitialState.providers }))
);
