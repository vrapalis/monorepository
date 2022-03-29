import {createAction, props} from "@ngrx/store";

export const getClientIdAction = createAction('[Entry Home Component] Get client id', props<{ id: string }>());
