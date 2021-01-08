import { Component } from '@angular/core';
import { AbstractButtonComponent } from '@web-browser/shared/model';

@Component({
  selector: 'sh-ui-raised-button',
  template: `
    <button type='button' mat-raised-button [color]='buttonType' [disabled]='disabled'>
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class RaisedButtonComponent extends AbstractButtonComponent {
}
