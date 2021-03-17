import { Component, Input } from '@angular/core';
import { UserModel } from '@web-browser/shared/auth/model';

@Component({
  selector: 'web-browser-home-component',
  template: `
    <ng-container *ngIf='user'>
      <div class='homeContainer'>
<!--        <h1 class='headerFn'>Ihr Profile</h1>-->
<!--        <h3 class='subHeaderFn'>{{userName(user)}}</h3>-->
      </div>
    </ng-container>
  `,
  styles: [`
    .homeContainer {
      /*padding: 0px 5px;*/
      margin-top: -30px;
    }

    .subHeaderFn {
      margin-top: -15px;
    }
  `]
})
export class HomeComponent {
  @Input() user: UserModel;

  userName(user: UserModel) {
    return `${user.info.firstName} ${user.info.surname}`;
  }
}
