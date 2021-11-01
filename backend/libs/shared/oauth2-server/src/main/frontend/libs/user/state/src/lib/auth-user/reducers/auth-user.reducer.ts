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
  on(AuthUserActions.loadAuthUsers, (state, action) => ({...state, ...action.authUser})),
  on(AuthUserActions.loadAuthUsersSuccess, (state, action) => state),
  on(AuthUserActions.loadAuthUsersFailure, (state, action) => state)
);

