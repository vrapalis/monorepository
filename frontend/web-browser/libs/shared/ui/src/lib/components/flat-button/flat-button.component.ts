import { Component } from '@angular/core';
import { AbstractButtonComponent } from '@web-browser/shared/model';

@Component({
  selector: 'sh-ui-flat-button',
  template: `
    <button type='button' mat-flat-button [color]='buttonType' [disabled]='disabled'>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class FlatButtonComponent extends AbstractButtonComponent {
}
