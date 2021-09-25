import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsitesVrapalisUiBodyComponent} from './components/websites-vrapalis-ui-body.component';


@NgModule({
  declarations: [
    WebsitesVrapalisUiBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [WebsitesVrapalisUiBodyComponent]
})
export class WebsitesVrapalisUiBodyModule {
}
