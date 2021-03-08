import { Component } from '@angular/core';
import { ECompanyButtonTypeModel } from '../models/button.model';

@Component({
  selector: 'web-browser-company-container',
  template: `
    <web-browser-company (toggleEvent)='view = $event'></web-browser-company>
    <div *ngIf='view' class='mt-2'>
      <ng-container *ngIf='(view == typeBtn.QR_CODE); else questsView;'>
        <web-browser-qr-code></web-browser-qr-code>
      </ng-container>
      <ng-template #questsView>
        <web-browser-quests></web-browser-quests>
      </ng-template>
    </div>
  `,
  styles: []
})
export class CompanyContainerComponent {
  typeBtn = ECompanyButtonTypeModel;
  view: ECompanyButtonTypeModel;

  constructor() {
  }

}
