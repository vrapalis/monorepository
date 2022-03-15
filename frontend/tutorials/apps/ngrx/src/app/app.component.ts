import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "./state/state.reducer";
import {DECREASE_COUNTER_ACTION, INCREASE_COUNTER_ACTION, RESET_COUNTER_ACTION} from "./state/state.action";
import {tap} from "rxjs";
import {SELECT_COUNTER} from "./state/state.selector";

@Component({
  selector: 'tutorials-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter$ = this.state.select(SELECT_COUNTER);

  constructor(private state: Store<AppState>) {
  }

  increment() {
    this.state.dispatch(INCREASE_COUNTER_ACTION());
  }

  decrement() {
    this.state.dispatch(DECREASE_COUNTER_ACTION());
  }

  reset() {
    this.state.dispatch(RESET_COUNTER_ACTION());
  }

}
