import { createAction, props } from '@ngrx/store';
import { SignInModel } from '@web-browser/shared/auth/model';

export const loginActions = createAction(
  '[Login Component] Login Actions',
  props<{ user: SignInModel }>()
);

export const loginSuccessActions = createAction(
  '[Login Component] Login Actions',
  props<{ user: SignInModel }>()
);

export const loginFailureActions = createAction(
  '[Login Component] Login Actions Failure'
);
