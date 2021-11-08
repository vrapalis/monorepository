import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebShUiPageContainerComponent} from './containers/web-sh-ui-page-container.component';
import {WebsitesVrapalisHeaderModule, WebsitesVrapalisUiBodyModule} from "@web/websites/vrapalis/ui";
import {WebShUiContactSideLinkModule} from "../contact-side-link/web-sh-ui-contact-side-link.module";
import {
  WebsitesVrapalisSideLinkDataAccessService,
  WebsitesVrapalisSideLinkModule
} from "@web/websites/vrapalis/data-access";


@NgModule({
  declarations: [
    WebShUiPageContainerComponent
  ],
  imports: [
    CommonModule,
    WebsitesVrapalisHeaderModule,
    WebShUiContactSideLinkModule,
    WebsitesVrapalisUiBodyModule,
    WebsitesVrapalisSideLinkModule
  ],
  exports: [WebShUiPageContainerComponent]
})
export class WebShUiPageModule {
}
