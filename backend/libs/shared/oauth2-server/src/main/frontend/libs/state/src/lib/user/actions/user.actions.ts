import { createAction, props } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

const APPLICATION_CONTAINER = '[Application Container]';

export const TRY_TO_RECEIVE_TOKEN_ACTION = createAction(
  `${APPLICATION_CONTAINER} Try To Receive Token`
);

export const TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION = createAction(
  `${APPLICATION_CONTAINER} Success Received Token`,
  props<{ user: UserState }>()
);

export const TRY_TO_RECEIVE_TOKEN_ERROR_ACTION = createAction(
  `${APPLICATION_CONTAINER} Error Received Token`
);