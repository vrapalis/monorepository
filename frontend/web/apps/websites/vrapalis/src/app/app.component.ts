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
    const browserLanguage = navigator.language.split('-')[0];
    switch (browserLanguage) {
      case 'de':
        translate.setDefaultLang('de');
        translate.use('de');
        break;
      case 'ru':
        translate.setDefaultLang('ru');
        translate.use('ru');
        break;
      default:
        translate.setDefaultLang('en');
        translate.use('en');
        break;
    }
  }

}
