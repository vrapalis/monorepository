import { Component, Input } from '@angular/core';
import { UserModel } from '@web-browser/shared/auth/model';

@Component({
  selector: 'web-browser-home-component',
  template: `
    <ng-container *ngIf='user'>
      <div>
        <h1>Ihr Profile</h1>
        <h3>{{userName(user)}}</h3>
      </div>
    </ng-container>
  `,
  styles: []
})
export class HomeComponent {
  @Input() user: UserModel;

  userName(user: UserModel) {
    return `${user.info.firstName} ${user.info.surname}`;
  }
}
