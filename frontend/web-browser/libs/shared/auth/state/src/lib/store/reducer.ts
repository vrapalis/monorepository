import { createReducer, on } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import {
  signInFailureAction,
  signInSuccessAction,
  tryToSignInFailureAction,
  tryToSignInSuccessAction
} from './actions';


export const authFeatureKey = 'authenticated';

export interface AuthState {
  user: UserModel;
}

export const initialState: AuthState = {
  user: null
};

export const reducer = createReducer(
  initialState,

  on(tryToSignInSuccessAction, (state, action) => {
    return {
      ...state,
      user: {
        ...action.user
      }
    };
  }),

  on(tryToSignInFailureAction, state => {
    return {
      user: null
    };
  }),

  on(signInSuccessAction, (state, action) => {
    return {
      ...state,
      user: {
        ...action.user
      }
    };
  }),

  on(signInFailureAction, (state) => {
    return {
      ...state,
      user: null
    };
  })
);
