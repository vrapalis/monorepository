import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUserState, State, tryToSignInAction } from '@web-browser/shared/auth/state';
import { UserModel } from '@web-browser/shared/auth/model';
import { map, take } from 'rxjs/operators';

@Injectable()
export class HomeGuardService implements CanLoad {
  user: Observable<boolean>;

  constructor(private router: Router, private state: Store<State>) {
    this.state.dispatch(tryToSignInAction());
    this.user = this.state.select(selectAuthUserState)
      .pipe(
        take(1),
        map(this.onSelectAuthUser)
      );
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user;
  }

  onSelectAuthUser = (user: UserModel): boolean => {
    if (user.email == null) {
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  };
}
