import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'web-root',
  template: `
    <web-sh-ui-page-container>
      <router-outlet></router-outlet>
    </web-sh-ui-page-container>
  `,
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
