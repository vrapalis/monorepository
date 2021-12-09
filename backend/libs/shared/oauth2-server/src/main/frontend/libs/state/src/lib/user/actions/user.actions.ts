import { createAction, props } from '@ngrx/store';
import { IUserState } from '../reducers/user.reducer';
import { IServerResponse, IUserRegistration, IUserResetPassword } from '@frontend/shared/model';

const APPLICATION_CONTAINER = '[Application Container]';

export const TRY_TO_RECEIVE_TOKEN_ACTION = createAction(
  `${APPLICATION_CONTAINER} Try To Receive Token`
);

export const TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION = createAction(
  `${APPLICATION_CONTAINER} Success Received Token`,
  props<{ user: IUserState }>()
);

export const TRY_TO_RECEIVE_TOKEN_ERROR_ACTION = createAction(
  `${APPLICATION_CONTAINER} Error Received Token`
);

export const REGISTRATION_ACTION = createAction(
  '[Registration Component] User Registration',
  props<{ user: IUserRegistration }>()
);

export const REGISTRATION_SUCCESS_ACTION = createAction(
  '[User Effect] Registration Success',
  props<{ response: IServerResponse }>()
);

export const REGISTRATION_ERROR_ACTION = createAction(
  '[User Effect] Registration Error',
  props<{ response: IServerResponse }>()
);

export const REGISTRATION_CODE_ACTION = createAction(
  '[Registration Component] Registration Code',
  props<{ code: string }>()
);

export const REGISTRATION_CODE_SUCCESS_ACTION = createAction(
  '[User Effect] Registration Code Success',
  props<{ response: IServerResponse }>()
);

export const REGISTRATION_CODE_ERROR_ACTION = createAction(
  '[User Effect] Registration Code Error',
  props<{ response: IServerResponse }>()
);

export const FORGOT_PASSWORD_ACTION = createAction(
  '[Forgot Password Component] Forgot Password',
  props<{ email: string }>()
);

export const FORGOT_PASSWORD_SUCCESS_ACTION = createAction(
  '[User Effect] Forgot Password Success',
  props<{ response: IServerResponse }>()
);

export const FORGOT_PASSWORD_ERROR_ACTION = createAction(
  '[User Effect] Forgot Password Error',
  props<{ response: IServerResponse }>()
);

export const RESET_PASSWORD_ACTION = createAction(
  '[Reset Password Component] Reset Password',
  props<{ resetPassword: IUserResetPassword }>()
);

export const RESET_PASSWORD_SUCCESS_ACTION = createAction(
  '[User Effect] Reset Password Success',
  props<{ response: IServerResponse }>()
);

export const RESET_PASSWORD_ERROR_ACTION = createAction(
  '[User Effect] Reset Password Error',
  props<{ response: IServerResponse }>()
);