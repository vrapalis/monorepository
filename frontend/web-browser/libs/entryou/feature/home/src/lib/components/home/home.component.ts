import { Component, Input } from '@angular/core';
import { UserModel } from '@web-browser/shared/auth/model';

@Component({
  selector: 'web-browser-home-component',
  template: `
    <p *ngIf='user'>
      Hello User: {{user | json}}
    </p>
  `,
  styles: []
})
export class HomeComponent {
  @Input() user: UserModel;

  constructor() {
  }

}
