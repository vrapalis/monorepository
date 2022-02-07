import {Component} from '@angular/core';

@Component({
  selector: 'web-root',
  template: `
    <web-sh-ui-navigation>
      <router-outlet></router-outlet>
    </web-sh-ui-navigation>
  `,
  styles: [],
})
export class AppComponent {
}
