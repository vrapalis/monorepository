import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-sh-ui-contact-side-item-link-component',
  template: `
    <i class='item' [class]='bootstrapIcon' role='img' (click)='itemClick()'></i>
  `,
  styleUrls: ['contact-side-item-link.component.scss']
})
export class ContactSideItemLinkComponent {
  @Input() bootstrapIcon = '';
  @Output() itemClickEvent = new EventEmitter<void>();

  itemClick() {
    this.itemClickEvent.emit();
  }
}
