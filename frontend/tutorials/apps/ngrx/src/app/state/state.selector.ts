import {APP_SELECTOR, AppState} from "./state.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const SELECT_STATE = createFeatureSelector<AppState>(APP_SELECTOR);
export const SELECT_COUNTER = createSelector(SELECT_STATE, (state) => state.counter);
