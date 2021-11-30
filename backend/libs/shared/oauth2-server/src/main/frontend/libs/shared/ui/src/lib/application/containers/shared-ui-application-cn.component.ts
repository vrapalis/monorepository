import { Component, OnInit } from '@angular/core';
import { SharedUtilAuthService } from '@frontend/shared/util';

@Component({
  selector: 'frontend-shared-ui-application-cn',
  template: `
    <frontend-navigation-container appName='OAuth2 Client' (loginEvent)='onLoginEvent()'>
      <ng-content></ng-content>
    </frontend-navigation-container>
  `,
  styles: []
})
export class SharedUiApplicationCnComponent {

  constructor(private sharedUtilAuthService: SharedUtilAuthService) {
  }

  onLoginEvent() {
    this.sharedUtilAuthService.onLoginEvent();
  }

}
