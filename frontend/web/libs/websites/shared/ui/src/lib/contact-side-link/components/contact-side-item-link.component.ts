import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-sh-ui-contact-side-item-link-component',
  template: `
    <i class='item' [class]='bootstrapIcon' role='img' (click)='itemClick()'></i>
  `,
  styles: [`
    .item {
      margin: 8px;
      height: 50px;
      font-size: 50px;
      width: 50px;
      transition: 0.1s font-size ease-out;
    }

    .item:hover {
      cursor: pointer;
      font-size: 52px;
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
