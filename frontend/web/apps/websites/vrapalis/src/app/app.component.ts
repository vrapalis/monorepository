import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from "@web/websites/vrapalis/utility";

@Component({
  selector: 'web-root',
  template: `
    <web-sh-ui-page-container>
      <router-outlet></router-outlet>
    </web-sh-ui-page-container>

    <ngx-spinner
      bdColor="rgba(51,51,51,0.8)"
      size="medium"
      color="#fff"
      type="ball-scale-multiple">
      <p style="font-size: 20px; color: white">Loading...</p>
    </ngx-spinner>
  `,
})
export class AppComponent {

  constructor(private languageService: LanguageService) {
  }

}
