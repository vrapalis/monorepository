import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'web-root',
  template: `
    <web-sh-ui-navbar></web-sh-ui-navbar>
    <web-sh-ui-contact-side-link></web-sh-ui-contact-side-link>


    <div class='container mt-3 text-center'>
      <div>{{'NAVBAR.LINKS.HOME' | translate}}</div>
      <button class='btn btn-info' (click)='eng()'>En</button>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`

  `]

})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any, private translate: TranslateService) {
    if (isPlatformBrowser(platformId)) {
    }

    this.translate.get('NAVBAR.LINKS.HOME').subscribe(console.log);
  }

  eng() {
    this.translate.use('en').subscribe(value => {
      this.translate.get('NAVBAR.LINKS.HOME').subscribe(console.log);
    });
  }
}
