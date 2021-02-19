import { createReducer, on } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import {
  signInFailureAction,
  signInSuccessAction, signOutAction,
  tryToSignInFailureAction,
  tryToSignInSuccessAction
} from './user.actions';


export const authUserFeatureKey = 'user';

export const initialState: UserModel = {
  email: null,
  info: null,
  account: null,
  roles: null
};

export const userReducer = createReducer(
  initialState,

  on(tryToSignInSuccessAction, (state, action) => {
    return {
      ...state,
      email: action.user.email,
      account: action.user.account,
      info: action.user.info,
      roles: action.user.roles
    };
  }),

  on(tryToSignInFailureAction, state => {
    return initialState;
  }),

  on(signInSuccessAction, (state, action) => {
    return {
      ...state,
      email: action.user.email,
      account: action.user.account,
      info: action.user.info,
      roles: action.user.roles
    };
  }),

  on(signInFailureAction, (state) => {
    return initialState;
  }),

  on(signOutAction, state => {
    return initialState;
  })
);
