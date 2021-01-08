import { Component, Input } from '@angular/core';

export type ButtonType = 'primary' | 'default';

/**
 * Standard Button
 * @author vrapalis
 */
@Component({
  selector: 'sh-ui-st-button',
  template: `
    <button [ngStyle]='{backgroundColor: determineType()}'>{{title}}</button>
  `,
  styles: [`
    button {
      padding: 5px 50px;
      border-radius: 5px;
    }
  `]
})
export class StButtonComponent {
  @Input() title = 'click';
  @Input() type: ButtonType = 'default';

  /**
   * @returns The processed target number
   */
  determineType() {
    switch (this.type) {
      case 'default':
        return '';
      case 'primary':
        return 'red';
      default:
        return '';
    }
  }
}
