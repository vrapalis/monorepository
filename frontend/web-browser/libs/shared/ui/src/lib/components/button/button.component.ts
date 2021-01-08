import { AbstractButtonComponent } from '@web-browser/shared/model';
import { Component } from '@angular/core';

/**
 * Standard button
 */
@Component({
  selector: 'sh-ui-button',
  template: `
    <button type='button' mat-button [color]='buttonType' [disabled]='disabled'>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent extends AbstractButtonComponent {
}
