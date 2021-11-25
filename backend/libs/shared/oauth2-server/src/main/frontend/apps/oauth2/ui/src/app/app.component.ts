import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  OAUTH2_CODE_FLOW_CONFIG,
  SharedUtilEnvService,
} from '@frontend/shared/util';

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: OAuthService,
    private http: HttpClient,
    public envService: SharedUtilEnvService
  ) {
    this.authService.configure(OAUTH2_CODE_FLOW_CONFIG);
    this.authService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.authService.initLoginFlow();
  }

  request() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getAccessToken()}`,
    });
    this.http
      .get('http://127.0.0.1:8080/api/users/test-api', {
        observe: 'body',
        headers,
      })
      .subscribe(
        (value) => console.log(value),
        (error) => console.error({ err: error })
      );
  }
}
