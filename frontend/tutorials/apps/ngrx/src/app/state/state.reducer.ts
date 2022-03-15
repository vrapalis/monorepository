import {createReducer, on} from "@ngrx/store";
import {DECREASE_COUNTER_ACTION, INCREASE_COUNTER_ACTION, RESET_COUNTER_ACTION} from "./state.action";

export const APP_SELECTOR = "state";

export interface AppState {
  counter: number;
}

export const INITIAL_APP_STATE: AppState = {
  counter: 0
}

const REDUCER = createReducer(
  INITIAL_APP_STATE,
  on(INCREASE_COUNTER_ACTION, (state, action) => ({...state, counter: state.counter + 1})),
  on(DECREASE_COUNTER_ACTION, (state, action) => ({...state, counter: state.counter - 1})),
  on(RESET_COUNTER_ACTION, (state, action) => ({...state, counter: 0}))
);

export const APP_REDUCER = {
  state: REDUCER
}

