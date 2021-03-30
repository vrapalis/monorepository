import { createReducer, Action, on } from '@ngrx/store';
import { CHECK_IN_ACTION_FAILURE, CHECK_IN_ACTION_SUCCESS, CHECK_OUT_SUCCESS_ACTION } from './private.actions';
import { PrivateState } from '@web-browser/entryou/model';

export const ENTRYOU_PRIVATE_FEATURE_KEY = 'private';

export const initialState: PrivateState = {
  checkedIn: false,
  info: null,
  lastCheckIn: null
};

export const privateReducer = createReducer(
  initialState,

  on(CHECK_IN_ACTION_SUCCESS, (state, action) => {
    return {
      ...state,
      checkedIn: true,
      info: {
        ...state.info,
        ...action.serverResponse.info
      },
      lastCheckIn: {
        ...state.lastCheckIn,
        ...action.serverResponse.lastCheckIn
      }
    };
  }),

  on(CHECK_IN_ACTION_FAILURE, (state, action) => initialState),

  on(CHECK_OUT_SUCCESS_ACTION, (state, action) => initialState),

);

