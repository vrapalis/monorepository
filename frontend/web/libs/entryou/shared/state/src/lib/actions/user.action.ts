import {createAction, props} from "@ngrx/store";

export const loginAction = createAction('[APP Component], User Login');
export const loginSuccessAction = createAction('[User Effect], User Success Login', props<{ user: any }>());
export const loginErrorAction = createAction('[User Effect], User Error Login', props<{ error: any }>());
