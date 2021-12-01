import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frontend-home-cn',
  template: `
    <frontend-shared-ui-application-cn>
      <router-outlet></router-outlet>
    </frontend-shared-ui-application-cn>
  `,
  styles: [
  ]
})
export class HomeCnComponent implements OnInit {

  constructor(private oauthService: OAuthService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // This would directly (w/o user interaction) redirect the user to the
    // login page if they are not already logged in.
    /*this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
        this.oauthService.initImplicitFlow('some-state');
      }
    });*/
  }

}
