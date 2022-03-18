import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {routerReducer, RouterReducerState} from "@ngrx/router-store";

export interface State {
  router?: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = [];
