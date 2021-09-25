import
{Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {WebsitesVrapalisSideLinkDataAccessService} from "@web/websites/vrapalis/data-access";
import {Observable} from "rxjs";
import {ISideLink} from "@web/websites/shared/model";

@Component({
  selector: 'web-root',
  template: `
    <web-vr-header></web-vr-header>
    <web-sh-ui-contact-side-link [links]="links | async"></web-sh-ui-contact-side-link>

    <web-websites-vrapalis-ui-body>
      <router-outlet></router-outlet>
    </web-websites-vrapalis-ui-body>
  `,
  styles: [``]
})
export class AppComponent {
  links: Observable<ISideLink>;

  constructor(private translate: TranslateService,
              public sideLinkService: WebsitesVrapalisSideLinkDataAccessService) {
    this.links = sideLinkService.getSingle('side-links');
  }

  eng() {
    this.translate.use('en').subscribe(value => {
      this.translate.get('NAVBAR.LINKS.HOME').subscribe(console.log);
    });
  }
}
