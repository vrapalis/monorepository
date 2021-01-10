import { createReducer, on } from '@ngrx/store';
import { AuthLoginModel } from '@web-browser/shared/auth/model';
import { loginActions } from './actions';


export const authFeatureKey = 'user';

export interface AuthState extends AuthLoginModel {
}

export const initialState: AuthState = {
  email: '',
  password: ''
};

export const reducer = createReducer(
  initialState,
  on(loginActions, (state, action) => {
    return {
      ...state,
      email: action.user.email,
      password: action.user.password
    };
  })
);
