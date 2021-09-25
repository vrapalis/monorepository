import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactSideLinkContainerComponent} from './containers/contact-side-link-container.component';
import {ContactSideLinkComponent} from './components/contact-side-link.component';
import {ContactSideItemLinkComponent} from './components/item/contact-side-item-link.component';


@NgModule({
  declarations: [
    ContactSideLinkContainerComponent,
    ContactSideLinkComponent,
    ContactSideItemLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactSideLinkContainerComponent,
    ContactSideItemLinkComponent
  ]
})
export class WebShUiContactSideLinkModule {
}
