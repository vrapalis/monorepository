import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from "@angular/router";
import {Observable, of} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";
import {EnvService} from "@web/oauth2-shared-utility";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanLoad {

  constructor(private authService: OAuthService, private envService: EnvService, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    this.authService.configure(this.envService.getAuthConfig());
    return from(this.authService.loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        if (!this.authService.hasValidIdToken() || !this.authService.hasValidAccessToken()) {
          // noinspection JSIgnoredPromiseFromCall
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      })
      .catch(err => false));
  }
}
