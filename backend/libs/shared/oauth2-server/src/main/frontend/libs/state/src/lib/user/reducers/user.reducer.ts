import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  id: string | null;
  email: string | null;
  scopes: Array<string> | null;
}

export const initialState: UserState = {
  id: null,
  email: null,
  scopes: null
};

export const reducer = createReducer(
  initialState,

  on(UserActions.TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION, (state, action) => ({
    ...state,
    ...action.user
  }))
);
