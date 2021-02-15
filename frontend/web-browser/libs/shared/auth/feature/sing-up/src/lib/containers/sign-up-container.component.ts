import { Component } from '@angular/core';

@Component({
  selector: 'web-browser-registration-container',
  template: `
    <sh-ui-form-container>
      <h3>Sign Up</h3>
      <web-browser-sign-up></web-browser-sign-up>
    </sh-ui-form-container>
  `,
  styles: []
})
export class SignUpContainerComponent {
}
