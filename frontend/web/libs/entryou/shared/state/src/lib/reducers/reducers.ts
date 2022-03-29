import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {userReducer, UserState} from "./user.reducer";
import {clientReducer, ClientState} from "./client.reducer";

export interface State {
  router?: RouterReducerState;
  user: UserState;
  client: ClientState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  user: userReducer,
  client: clientReducer
};

export const metaReducers: MetaReducer<State>[] = [];
