import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromAuth from './reducer';

export const authStoreFeatureKey = 'auth';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
