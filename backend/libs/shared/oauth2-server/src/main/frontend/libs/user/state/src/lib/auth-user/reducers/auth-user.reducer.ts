import { Action, createReducer, on } from '@ngrx/store';
import * as AuthUserActions from '../actions/auth-user.actions';
import { IAuthUser } from '@frontend/shared/model';

export const authUserFeatureKey = 'auth-user';

export const initialState: IAuthUser = {
  id: null,
  email: null,
  name: null
};


export const reducer = createReducer(
  initialState,
  on(AuthUserActions.LOAD_AUTH_USER_ACTION_SUCCESS, (state, action) => state),
  on(AuthUserActions.LOAD_AUTH_USER_ACTION_ERROR, (state, action) => state)
);

