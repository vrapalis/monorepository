import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'frontend-shared-ui-header-container',
  template: `
    <frontend-shared-ui-header [appName]='appName' [drawer]='drawer'>
    </frontend-shared-ui-header>
  `,
  styles: [``]
})
export class SharedUiHeaderContainerComponent {
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;
}
