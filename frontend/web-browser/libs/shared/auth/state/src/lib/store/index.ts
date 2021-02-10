import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromAuth from './user/user.reducer';
import { UserModel } from '@web-browser/shared/auth/model';

export const authStoreFeatureKey = 'auth';

export interface State {
  [fromAuth.authUserFeatureKey]: UserModel;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authUserFeatureKey]: fromAuth.userReducer
};

export const metaReducers: MetaReducer<State>[] = [];
