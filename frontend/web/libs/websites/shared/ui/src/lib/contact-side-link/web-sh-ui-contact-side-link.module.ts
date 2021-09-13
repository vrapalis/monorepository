import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSideLinkContainerComponent } from './containers/contact-side-link-container.component';
import { ContactSideLinkComponent } from './components/contact-side-link.component';


@NgModule({
  declarations: [
    ContactSideLinkContainerComponent,
    ContactSideLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContactSideLinkContainerComponent, ContactSideLinkComponent]
})
export class WebShUiContactSideLinkModule {
}
