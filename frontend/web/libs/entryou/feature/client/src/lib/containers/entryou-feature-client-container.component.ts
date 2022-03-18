import {Component} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {RouterFacade} from "@web/entryou/shared/state";

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
  entryId$ = this.routerFacade.getClientEntryId$;

  constructor(private routerFacade: RouterFacade) {
  }
}
