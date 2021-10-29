import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'http://127.0.0.1:8080',
  useHttpBasicAuth: true,
  dummyClientSecret: 'secret',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'client',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',
  requireHttps: false,

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  // scope: 'openid',
  scope: 'read',

  showDebugInformation: true
};

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: OAuthService, private http: HttpClient) {
    this.authService.configure(authCodeFlowConfig);
    this.authService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.authService.initLoginFlow();
  }

  request() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getAccessToken()}`
    })
    this.http.get('http://127.0.0.1:8080/api/users/test-api', { observe: 'body', headers })
      .subscribe(value => console.log(value), error => console.error({ 'err': error }));
  }
}
