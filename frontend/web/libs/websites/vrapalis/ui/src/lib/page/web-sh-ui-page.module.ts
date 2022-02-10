import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebShUiPageContainerComponent} from './containers/web-sh-ui-page-container.component';
import {WebsitesVrapalisHeaderModule} from "../header/websites-vrapalis-header.module";
import {WebsitesVrapalisUiBodyModule} from "../body/websites-vrapalis-ui-body.module";
import {WebsitesVrapalisFooterModule} from "../footer/websites-vrapalis-footer.module";


@NgModule({
  declarations: [
    WebShUiPageContainerComponent
  ],
    imports: [
        CommonModule,
        WebsitesVrapalisHeaderModule,
        WebsitesVrapalisUiBodyModule,
        WebsitesVrapalisFooterModule,
    ],
  exports: [WebShUiPageContainerComponent]
})
export class WebShUiPageModule {
}
