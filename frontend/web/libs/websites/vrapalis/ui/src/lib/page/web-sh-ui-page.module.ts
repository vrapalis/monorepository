import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebShUiPageContainerComponent} from './containers/web-sh-ui-page-container.component';
import {WebShUiContactSideLinkModule} from "@web/websites/shared/ui";
import {WebsitesVrapalisHeaderModule} from "../header/websites-vrapalis-header.module";
import {WebsitesVrapalisUiBodyModule} from "../body/websites-vrapalis-ui-body.module";


@NgModule({
  declarations: [
    WebShUiPageContainerComponent
  ],
  imports: [
    CommonModule,
    WebsitesVrapalisHeaderModule,
    WebShUiContactSideLinkModule,
    WebsitesVrapalisUiBodyModule
  ],
  exports: [WebShUiPageContainerComponent]
})
export class WebShUiPageModule {
}
