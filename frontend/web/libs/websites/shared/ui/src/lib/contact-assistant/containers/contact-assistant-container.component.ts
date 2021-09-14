import { Component } from '@angular/core';

@Component({
  selector: 'web-sh-ui-contact-assistant',
  template: `
    <web-sh-ui-contact-assistant-component class='wrapper'></web-sh-ui-contact-assistant-component>
  `,
  styles: [`
    .wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  `]
})
export class ContactAssistantContainerComponent {

}
