import { Component } from '@angular/core';

@Component({
  selector: 'frontend-login-form-cn',
  template: `
    <div class='wrapper row justify-content-center align-content-center'>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
      ::ng-deep body {
          background-color: azure;
          overflow: hidden;
      }

      .wrapper {
          width: 50%;
          margin: auto;
          height: 100%;
      }
  `]
})
export class LoginFormCnComponent {

}
