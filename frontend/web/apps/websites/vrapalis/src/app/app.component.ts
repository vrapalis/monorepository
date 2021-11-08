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
  }

  eng() {
    this.translate.use('en').subscribe(value => {
      this.translate.get('NAVBAR.LINKS.HOME').subscribe(console.log);
    });
  }
}
