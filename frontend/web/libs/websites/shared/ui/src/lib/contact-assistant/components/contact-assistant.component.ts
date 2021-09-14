import { AfterViewInit, Component, ContentChild, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'web-sh-ui-contact-assistant-component',
  template: `
    <aside class='wrapper'>
      <div class='assistant-form' [class.assistant-form-shown]='isShown'></div>
      <web-sh-ui-contact-side-item-link-component bootstrapIcon='bi-chat-square-text' (itemClickEvent)='onItemCLick()'>
      </web-sh-ui-contact-side-item-link-component>
    </aside>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: column;
      height: 450px;
      width: 400px;
      justify-content: flex-end;
      align-items: flex-end;
    }

    .assistant-form {
      opacity: 0;
      margin: 8px;
      flex-grow: 2;
      border-radius: 5px;
      width: 95%;
      transition: 0.1s opacity ease-out;
      background: #eeeeee;
    }

    .assistant-form-shown {
      opacity: 1;
      transition: 0.1s opacity ease-in;
    }

  `]
})
export class ContactAssistantComponent implements AfterViewInit {
  public isShown = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngAfterViewInit(): void {
  }

  onItemCLick() {
    this.isShown = !this.isShown;
  }
}
