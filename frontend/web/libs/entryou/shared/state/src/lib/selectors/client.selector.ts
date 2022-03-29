import {createFeatureSelector} from "@ngrx/store";
import {State} from "../reducers/reducers";
import {ClientState} from "../reducers/client.reducer";

export const CLIENT_SELECTOR = createFeatureSelector<State, ClientState>('client');
