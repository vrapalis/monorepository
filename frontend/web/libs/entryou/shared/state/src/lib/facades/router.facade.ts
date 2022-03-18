import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from '../reducers/reducers';
import {selectUrl} from '../selectors/selectors';
import {getClientEntryId} from "@web/entryou-shared-utility";

@Injectable({
  providedIn: "root"
})
export class RouterFacade {
  getClientEntryId$ = this.state.select(selectUrl).pipe(getClientEntryId());

  constructor(private state: Store<State>) {
  }
}
