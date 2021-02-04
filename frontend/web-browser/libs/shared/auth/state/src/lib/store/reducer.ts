import { createReducer, on } from '@ngrx/store';
import { SignInModel } from '@web-browser/shared/auth/model';
import { loginActions, loginFailureActions } from './actions';


export const authFeatureKey = 'auth';

export interface AuthState {
}

export const initialState: AuthState = {};

export const reducer = createReducer(
  initialState,
  on(loginFailureActions, (state) => {
    return {
      ...state
    };
  })
);
