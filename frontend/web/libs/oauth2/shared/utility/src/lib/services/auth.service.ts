import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {EnvService} from "../services/env.service";
import {catchError, flatMap, from, map, Observable, of, switchMap, throwError} from "rxjs";

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
        console.log("Lonxgin success event")
        console.log(this.oAuthService.getIdentityClaims())
      }
    }).catch(err => {
      this.oAuthService.logOut();
      console.error(err);
    });
  }

  login(): Observable<any> {
    return of(this.oAuthService.configure(this.envService.getAuthConfig()))
      .pipe(
        switchMap(() => from(this.oAuthService.loadDiscoveryDocumentAndTryLogin())),
        switchMap(() => {
          if (!this.oAuthService.hasValidIdToken() || !this.oAuthService.hasValidAccessToken()) {
            this.oAuthService.initImplicitFlow('some-state');
            return of(null);
          } else {
            return of(this.oAuthService.getIdentityClaims());
          }
        }),
        catchError(err => {
          console.error(err);
          this.oAuthService.logOut();
          return throwError(() => err);
        })
      );
  }
}
