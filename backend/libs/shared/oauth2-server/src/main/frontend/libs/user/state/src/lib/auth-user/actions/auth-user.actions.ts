import { createAction, props } from '@ngrx/store';
import { IAuthUser } from '@frontend/shared/model';

export const LOAD_AUTH_USER_ACTION = createAction(
  '[Home Component] Load Authenticated User'
);

export const LOAD_AUTH_USER_ACTION_SUCCESS = createAction(
  '[User Effect] Load Authenticated User Success',
  props<{ data: any }>()
);

export const LOAD_AUTH_USER_ACTION_ERROR = createAction(
  '[User Effect] Load Authenticated User Error',
  props<{ error: any }>()
);

