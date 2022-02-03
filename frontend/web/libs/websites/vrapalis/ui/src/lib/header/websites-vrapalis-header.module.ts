import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsitesVrapalisHeaderContainerComponent} from './containers/websites-vrapalis-header-container.component';
import {WebsitesVrapalisHeaderComponent} from './components/websites-vrapalis-header.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    WebsitesVrapalisHeaderContainerComponent,
    WebsitesVrapalisHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [WebsitesVrapalisHeaderContainerComponent]
})
export class WebsitesVrapalisHeaderModule {
}
