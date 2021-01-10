import { createAction, props } from '@ngrx/store';
import { AuthLoginModel } from '@web-browser/shared/auth/model';

export const loginActions = createAction(
  '[Action] Login Actions',
  props<{ user: AuthLoginModel }>()
);
