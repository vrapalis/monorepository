import {Component, OnInit} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";

@Component({
  selector: 'entryou-entryou-feature-client-container',
  template: `
    <div class="cl-wrapper">
      <entryou-group-btn [buttons]="buttons" (buttonChangeEvent)="change($event)"></entryou-group-btn>
      <div class="cl-body">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['entryou-feature-client-container.component.scss']
})
export class EntryouFeatureClientContainerComponent implements OnInit {
  buttons: Array<IEntryouButtonsModel> = [
    {name: 'Entries', value: 'entries'},
    {name: 'Code', value: 'code'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  change($event: IEntryouButtonsModel) {
    console.log($event);
  }

}
