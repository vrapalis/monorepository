import { createAction, props } from '@ngrx/store';
import { IAuthUser } from '@frontend/shared/model';

export const loadAuthUsers = createAction(
  '[AuthUser] Load AuthUsers',
  props<{ authUser: IAuthUser }>()
);

export const loadAuthUsersSuccess = createAction(
  '[AuthUser] Load AuthUsers Success',
  props<{ data: any }>()
);

export const loadAuthUsersFailure = createAction(
  '[AuthUser] Load AuthUsers Failure',
  props<{ error: any }>()
);

