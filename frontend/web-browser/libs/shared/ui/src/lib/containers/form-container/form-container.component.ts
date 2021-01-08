import { Component } from '@angular/core';

/**
 * Form container
 * @author vrapalis
 */
@Component({
  selector: 'sh-ui-form-container',
  template: `
    <section class='shared-ui-form-container'>
      <ng-content></ng-content>
    </section>
  `,
  styles: [`
    .shared-ui-form-container {
      min-width: 250px;
      max-width: 600px;
      margin: auto;
      width: 100%;
      text-align: center;
      padding: 50px 20px;
    }
  `]
})
export class FormContainerComponent {
}
