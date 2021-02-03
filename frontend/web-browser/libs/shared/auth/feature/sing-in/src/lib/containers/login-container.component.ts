import { Component } from '@angular/core';

@Component({
  selector: 'web-browser-login-container',
  template: `
    <sh-ui-form-container>
      <h3>Sign In</h3>
      <web-browser-login></web-browser-login>
      <aside class='info'>
        <p align='end'>Data privacy is important, we do our best to keep your data safe as much as possible</p>
      </aside>
    </sh-ui-form-container>
  `,
  styles: [`
    .info {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
      margin: auto;
    }
  `]
})
export class LoginContainerComponent {
}
