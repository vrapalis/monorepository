import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {EnvService} from "../services/env.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oAuthService: OAuthService, private envService: EnvService) {
  }

  tryToLogin() {
    this.oAuthService.configure(this.envService.getAuthConfig());
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.oAuthService.hasValidIdToken() || !this.oAuthService.hasValidAccessToken()) {
        this.oAuthService.initImplicitFlow('some-state');
      } else {
        console.log(this.oAuthService.getIdentityClaims())
      }
    }).catch(err => {
      this.oAuthService.logOut();
      console.error(err);
    });
  }
}
