import {createReducer, on} from "@ngrx/store";
import {getClientIdAction} from "../actions/client.action";

export interface ClientState {
  id: string | null;
}

const initialClientState: ClientState = {
  id: null
};

export const clientReducer = createReducer(
  initialClientState,
  on(getClientIdAction, (state, action) => ({...state, id: action.id}))
);
