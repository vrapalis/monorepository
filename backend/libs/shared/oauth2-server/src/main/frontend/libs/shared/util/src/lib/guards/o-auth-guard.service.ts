import { Injectable } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { flatMap, map, switchMap, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IUserState } from '@frontend/state';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class OAuthGuardService implements CanLoad {

  constructor(private oauthService: OAuthService, private state: Store<IUserState>) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return fromPromise(this.oauthService.loadDiscoveryDocumentAndTryLogin())
      .pipe(
        take(1),
        map(() => {
          if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
            this.oauthService.initLoginFlow();
            return false;
          } else {
            return true;
          }
        })
      );
  }

}
