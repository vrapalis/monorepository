import {Component} from '@angular/core';
import {WebsitesVrapalisSideLinkDataAccessService} from "@web/websites/vrapalis/data-access";
import {Observable} from "rxjs";
import {ISideLink} from "@web/websites/shared/model";

@Component({
  selector: 'web-sh-ui-page-container',
  template: `
    <main class="wrapper">
      <web-vr-header></web-vr-header>
<!--      <web-sh-ui-contact-side-link [links]="links | async"></web-sh-ui-contact-side-link>-->

      <web-websites-vrapalis-ui-body>
        <ng-content></ng-content>
      </web-websites-vrapalis-ui-body>
    </main>
  `,
  styleUrls: ['web-sh-ui-page-container.component.scss']
})
export class WebShUiPageContainerComponent {
  links: Observable<ISideLink>;

  constructor(public sideLinkService: WebsitesVrapalisSideLinkDataAccessService) {
    this.links = sideLinkService.getSingle('side-links');
  }
}
