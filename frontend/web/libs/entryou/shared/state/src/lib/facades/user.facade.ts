import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../reducers/reducers";
import {loginAction} from "../actions/user.action";
import {USER_SELECTOR} from "../selectors/user.selector";
import {skip} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserFacade {
  user$ = this.store.select(USER_SELECTOR).pipe(skip(1));

  constructor(private store: Store<State>) {
  }

  userLogin() {
    this.store.dispatch(loginAction());
  }
}
