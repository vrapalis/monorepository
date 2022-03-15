import {Component} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
import {Store} from "@ngrx/store";
import {selectUrl, State} from "@web/entryou/shared/state";
import {map, tap} from "rxjs";

@Component({
  selector: 'entryou-entryou-feature-client-container',
  template: `
    <div class="cl-wrapper">
      <entryou-group-btn [show]="(entryId$ | async) === null" [buttons]="buttons"></entryou-group-btn>
      <div class="cl-body">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['entryou-feature-client-container.component.scss']
})
export class EntryouFeatureClientContainerComponent {
  buttons: Array<IEntryouButtonsModel> = [
    {name: 'Entries', value: 'entries'},
    {name: 'Code', value: 'code'}
  ];
  entryId$ = this.state.select(selectUrl)
    .pipe(map(url => url.split('/client/entries/')[1]), map(id => id !== undefined ? id : null));

  constructor(private state: Store<State>) {
  }
}
