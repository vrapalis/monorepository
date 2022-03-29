import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../reducers/reducers";
import {CLIENT_SELECTOR} from "../selectors/client.selector";
import {getClientIdAction} from "../actions/client.action";

@Injectable({
  providedIn: "root"
})
export class ClientFacade {
  client$ = this.state.select(CLIENT_SELECTOR);

  constructor(private state: Store<State>) {
  }

  getClientIdAction(id: string | null) {
    if(id) {
      this.state.dispatch(getClientIdAction({id}));
    }
  }
}
