import { Component } from '@angular/core';
import { NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './oauth.config';
import { Observable, of } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

interface User {
  given_name?: string;
  family_name?: string;
  email?: string;
  roles?: Array<string>;
}

interface ApiInfo {
  info: string;
}

@Component({
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userProfile = of() as Observable<User>;
  apiInfo = of() as Observable<ApiInfo>;

  constructor(public oauthService: OAuthService, private http: HttpClient) {
    this.configure();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(val => this.userProfile = fromPromise(this.oauthService.loadUserProfile()).pipe(map((response: any) => {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(this.oauthService.getAccessToken());
      const roles = decodedToken['realm_access'].roles;
      const user = { ...response['info'], roles } as User;
      return user;
    })));
    this.oauthService.setupAutomaticSilentRefresh();
  }

  callApi(url: string) {
    this.apiInfo = this.http.get(`http://localhost:8081/api/${url}`, { observe: 'body' }).pipe(map(res => res as ApiInfo));
  }
}
