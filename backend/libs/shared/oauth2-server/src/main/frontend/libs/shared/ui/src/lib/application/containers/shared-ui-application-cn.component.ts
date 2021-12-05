import { Component } from '@angular/core';

@Component({
  selector: 'frontend-shared-ui-application-cn',
  template: `
    <frontend-navigation-container appName='OAuth2 Client'>
      <ng-content></ng-content>
    </frontend-navigation-container>
  `,
  styles: []
})
export class SharedUiApplicationCnComponent {

}
