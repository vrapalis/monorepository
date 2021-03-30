import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrivateState } from '@web-browser/entryou/model';

@Component({
  selector: 'web-browser-check-out',
  template: `
    <div class='container mt-5' *ngIf='privateState'>
      <img src='assets/images/tmp-org-image.svg'>
      <h3 class='logoFn'>{{privateState.info.companyName}}</h3>
      <h5 class='headerFn'>Herzlich Willkommen</h5>
      <p class='lightTextFn'>{{privateState.lastCheckIn.arriveOn | date: 'medium' }}</p>
      <web-browser-button title='Check out' (click)='checkOut()'></web-browser-button>
    </div>
  `,
  styles: []
})
export class CheckOutComponent {
  @Input() privateState: PrivateState;
  @Output() checkOutEvent = new EventEmitter<void>();

  checkOut() {
    this.checkOutEvent.emit();
  }
}
