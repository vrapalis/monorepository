import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {EnvService} from "@web/oauth2-shared-utility";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oAuthService: OAuthService, private envService: EnvService, private router: Router) {
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
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/service-unavailable']);
      console.error(err);
    });
  }
}
