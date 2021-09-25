import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IBootstrapIconLink, ISideLink} from "@web/websites/shared/model";

@Component({
  selector: 'web-sh-ui-contact-side-link-component',
  template: `
    <div class='wrapper' *ngIf="links">
      <web-sh-ui-contact-side-item-link-component [bootstrapIcon]="link.className" *ngFor="let link of links.links;"
                                                  class="item" (itemClickEvent)="onClickEvent(link)">
      </web-sh-ui-contact-side-item-link-component>
    </div>
  `,
  styleUrls: ['contact-side-link.component.scss']
})
export class ContactSideLinkComponent {
  @Input() links!: ISideLink | null;
  @Output() clickEvent = new EventEmitter<IBootstrapIconLink>();

  onClickEvent(link: IBootstrapIconLink) {
    this.clickEvent.emit(link);
  }
}
