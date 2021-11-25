import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'frontend-shared-ui-header-container',
  template: `
    <frontend-shared-ui-header [appName]='appName' [drawer]='drawer' (login)='oAuth2Flow()'>
    </frontend-shared-ui-header>
  `,
  styles: [``]
})
export class SharedUiHeaderContainerComponent implements OnInit {
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;

  constructor() {
  }

  oAuth2Flow() {
  }

  ngOnInit(): void {
  }
}
