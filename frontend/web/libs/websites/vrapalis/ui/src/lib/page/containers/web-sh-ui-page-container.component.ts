import {Component, ViewEncapsulation} from '@angular/core';
import {WebsitesVrapalisSideLinkDataAccessService} from "@web/websites/vrapalis/data-access";
import {Observable} from "rxjs";
import {ISideLink} from "@web/websites/shared/model";

@Component({
  selector: 'web-sh-ui-page-container',
  template: `
    <web-vr-header></web-vr-header>

    <main class="page-container-wrapper">
      <web-websites-vrapalis-ui-body>
        <ng-content></ng-content>
      </web-websites-vrapalis-ui-body>
    </main>

    <web-vr-footer></web-vr-footer>
  `,
  styleUrls: ['web-sh-ui-page-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebShUiPageContainerComponent {
  links: Observable<ISideLink>;

  constructor(public sideLinkService: WebsitesVrapalisSideLinkDataAccessService) {
    this.links = sideLinkService.getSingle('assets/content/side-links.json');
  }
}
