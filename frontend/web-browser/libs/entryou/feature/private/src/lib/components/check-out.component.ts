import { Component, Input } from '@angular/core';
import { PrivateState } from '@web-browser/entryou/model';

@Component({
  selector: 'web-browser-check-out',
  template: `
    <div class='container' *ngIf='privateState'>
      <img src='assets/images/tmp-org-image.svg'>
      <h3>{{privateState.info.companyName}}</h3>
      <h5>Herzlich Willkommen</h5>
      <p>{{privateState.lastCheckIn.arriveOn | date}}</p>
      <button>CheckOut</button>
    </div>
  `,
  styles: []
})
export class CheckOutComponent {
  @Input() privateState: PrivateState;
}
