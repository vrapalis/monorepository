import { Injectable } from '@angular/core';
import { AbstractGuardService } from './abstract-guard.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '@web-browser/shared/auth/state';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class NotAuthGuardsService extends AbstractGuardService implements CanLoad, CanActivate {

  constructor(private router: Router, private state: Store<State>) {
    super(state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isNotAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isNotAuthenticated();
  }

  isNotAuthenticated = (): Observable<boolean> => {
    return this.isAuth$.pipe(
      tap(isAuth => {
        if (isAuth) {
          this.router.navigate(['/home']);
        }
      }),
      map(isAuth => !isAuth),
      take(1));
  };
}
