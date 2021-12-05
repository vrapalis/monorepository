import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAUTH2_CODE_FLOW_CONFIG, SharedUtilAuthService } from '@frontend/shared/util';
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
              private sharedUtilAuthService: SharedUtilAuthService) {
  }

  ngOnInit(): void {
    this.authService.configure(OAUTH2_CODE_FLOW_CONFIG);
    this.sharedUtilAuthService.onOAuthEvents();
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
