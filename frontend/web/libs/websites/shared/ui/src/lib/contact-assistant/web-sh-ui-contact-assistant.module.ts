import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAssistantContainerComponent } from './containers/contact-assistant-container.component';
import { ContactAssistantComponent } from './components/contact-assistant.component';
import { WebShUiContactSideLinkModule } from '@web/websites/shared/ui';



@NgModule({
  declarations: [
    ContactAssistantContainerComponent,
    ContactAssistantComponent
  ],
  exports: [
    ContactAssistantContainerComponent
  ],
  imports: [
    CommonModule,
    WebShUiContactSideLinkModule
  ]
})
export class WebShUiContactAssistantModule { }
