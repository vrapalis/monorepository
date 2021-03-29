import { createAction, props } from '@ngrx/store';
import { CheckInModel, CheckInResponseModel } from '@web-browser/entryou/model';

// TODO COULD BE DELETED
export const init = createAction('[Entryou Page] Init');

export const CHECK_IN_FROM_LOCAL_STORAGE = createAction('[Check In From Local Storage Action]');
export const CHECK_IN_ACTION = createAction('[Check In Action]', props<{ checkInModel: CheckInModel }>());
export const CHECK_IN_ACTION_SUCCESS = createAction('[Check In Success Action]', props<{ serverResponse: CheckInResponseModel }>());
export const CHECK_IN_ACTION_FAILURE = createAction('[Check In Failure Action]', props<{ error }>());
