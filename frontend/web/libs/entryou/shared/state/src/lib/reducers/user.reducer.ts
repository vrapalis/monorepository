import {createReducer, on} from "@ngrx/store";
import {loginErrorAction, loginSuccessAction} from "../actions/user.action";

export interface UserState {
  readonly id: string | null;
  readonly email: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly picture?: string | null
  readonly roles: Array<string> | null;
}

export const userInitialState: UserState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  picture: null,
  roles: null
}

export const userReducer = createReducer(
  userInitialState,
  on(loginSuccessAction, (state, action) => (
    {
      ...state,
      id: action.user.sub,
      email: action.user.email,
      firstName: action.user.first_name,
      lastName: action.user.last_name,
      picture: action.user.picture,
      roles: action.user.roles
    }
  )),
  on(loginErrorAction, (state, action) => ({...userInitialState}))
);
