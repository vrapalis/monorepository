import { Injectable } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { flatMap, map, switchMap, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserState } from '@frontend/state';
import { SELECT_USER_STATE } from '../../../../../state/src/lib/user/selectors/user.selectors';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class OAuthGuardService implements CanLoad {

  constructor(private oauth2Service: OAuthService, private state: Store<UserState>) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.state.select(SELECT_USER_STATE).pipe(
      take(1),
      map(user => {
        if (user.id !== null) {
          return true;
        } else {
          return true;
        }
      })
    );
  }
}
