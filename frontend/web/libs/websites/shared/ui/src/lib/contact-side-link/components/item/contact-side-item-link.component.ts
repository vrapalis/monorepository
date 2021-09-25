import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-sh-ui-contact-side-item-link-component',
  template: `
    <i class='item' [class]='bootstrapIcon' role='img' (click)='itemClick()'></i>
  `,
  styles: [`
    .item {
      margin: 8px;
      font-size: 40px;
      transition: 0.1s font-size ease-out;
    }

    .item:hover {
      cursor: pointer;
      font-size: 42px;
      transition: 0.1s font-size ease-in;
    }
  `]
})
export class ContactSideItemLinkComponent {
  @Input() bootstrapIcon = '';
  @Output() itemClickEvent = new EventEmitter<void>();

  itemClick() {
    this.itemClickEvent.emit();
  }
}
