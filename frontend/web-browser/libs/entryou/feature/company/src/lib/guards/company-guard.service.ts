import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { map, take } from 'rxjs/operators';

@Injectable()
export class CompanyGuardService implements CanActivate {

  constructor(private authState: Store<UserModel>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authState.select(selectAuthUserState)
      .pipe(
        map(user => {
          if (user != null) {
            if (user.info.organizationTypeName == 'company') {
              return true;
            } else {
              this.router.navigate(['home/private']);
              return false;
            }
          } else {
            return false;
          }
        }),
        take(1)
      );
  }
}
