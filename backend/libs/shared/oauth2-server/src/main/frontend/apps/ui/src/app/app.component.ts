import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedUtilAuthService, SharedUtilEnvService } from '@frontend/shared/util';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '@frontend/shared/ui';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {

  constructor(private authService: OAuthService, private http: HttpClient,
              private sharedUtilAuthService: SharedUtilAuthService, private env: SharedUtilEnvService) {
  }

  ngOnInit(): void {
    this.authService.configure(this.env.getAuthConfig());
    this.authService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.authService.hasValidIdToken() || !this.authService.hasValidAccessToken()) {
        this.authService.initImplicitFlow('some-state');
      }
    }).catch(err => console.error(err));
    // this.sharedUtilAuthService.onOAuthEvents();
  }

  testRequest() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getAccessToken()}`
    });
    this.http
      .get('http://127.0.0.1:8080/api/users/test-api', {
        observe: 'body',
        headers
      })
      .subscribe(
        (value) => console.log(value),
        (error) => console.error({ err: error })
      );
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

}
