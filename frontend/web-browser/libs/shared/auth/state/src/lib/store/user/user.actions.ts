import { createAction, props } from '@ngrx/store';
import { SignInModel, SignUpModel, UserModel } from '@web-browser/shared/auth/model';
import { ServerResponseModel } from '@web-browser/shared/model';

export const tryToSignInAction = createAction(
  '[Home Component] Try To Sign In Action'
);

export const tryToSignInSuccessAction = createAction(
  '[Home Component] Try To Sign In Success Action',
  props<{ user: UserModel }>()
);

export const tryToSignInFailureAction = createAction(
  '[Home Component] Try To Sign In Failure Action'
);

export const signInAction = createAction(
  '[Login Component] Login Action',
  props<{ signInModel: SignInModel }>()
);

export const signInSuccessAction = createAction(
  '[Login Component] Login Success Action',
  props<{ user: UserModel }>()
);

export const signInFailureAction = createAction(
  '[Login Component] Login Failure Action'
);

export const signOutAction = createAction(
  '[Sign Out Action] Sign Out Action'
);

export const signUpAction = createAction(
  '[Sing Up Action]', props<{ signUpModel: SignUpModel }>()
);

export const signUpSuccessAction = createAction(
  '[Sign Up Success Action]'
);

export const signUpFailureAction = createAction(
  '[Sign Up Failure Action]'
);

export const signUpConfirmAction = createAction(
  '[Sign Up Confirm Action]', props<{ id: string }>()
);

export const signUpConfirmSuccessAction = createAction(
  '[Sign Up Confirm Success Action]', props<{serverResponse: ServerResponseModel}>()
);

export const signUpConfirmFailureAction = createAction(
  '[Sign Up Confirm Failure Action]', props<{ error: ServerResponseModel }>()
);

