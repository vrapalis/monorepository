import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '@web-browser/shared/auth/state';
import { AbstractGuardService } from './abstract-guard.service';
import { take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardsService extends AbstractGuardService implements CanLoad, CanActivate {

  constructor(private router: Router, private state: Store<State>) {
    super(state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isAuth$.pipe(
      tap(this.navigateToSignIn),
      take(1)
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuth$.pipe(
      tap(this.navigateToSignIn),
      take(1)
    );
  }

  navigateToSignIn = (isAuth: boolean): void => {
    if (!isAuth) {
      this.router.navigate(['/sign-in']);
    }
  };
}
