import {Component} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";

@Component({
  selector: 'entryou-entryou-feature-client-container',
  template: `
    <div class="cl-wrapper">
      <entryou-group-btn [buttons]="buttons"></entryou-group-btn>
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
}
