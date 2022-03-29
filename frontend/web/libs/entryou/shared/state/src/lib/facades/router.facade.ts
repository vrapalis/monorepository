import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from '../reducers/reducers';
import {selectUrl} from '../selectors/selectors';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RouterFacade {
  getClientEntryId$ = this.state.select(selectUrl).pipe(this.getClientEntryId());

  constructor(private state: Store<State>) {
  }

  getClientEntryId() {
    return function (source: Observable<string>) {
      return source.pipe(
        map((url: string) => url.split('/client/entries/')[1]),
        map(id => id !== undefined ? id : null)
      );
    }
  }
}
