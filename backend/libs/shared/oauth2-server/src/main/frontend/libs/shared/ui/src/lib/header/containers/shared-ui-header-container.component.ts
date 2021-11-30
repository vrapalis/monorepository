import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'frontend-shared-ui-header-container',
  template: `
    <frontend-shared-ui-header [appName]='appName' [drawer]='drawer' (login)='login()'>
    </frontend-shared-ui-header>
  `,
  styles: [``]
})
export class SharedUiHeaderContainerComponent {
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;
  @Output() loginEvent = new EventEmitter<void>();

  login() {
    this.loginEvent.emit();
  }
}
