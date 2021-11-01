import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IAuthUser } from '@frontend/shared/model';
import { tap } from 'rxjs/operators';
import { loadAuthUsers, selectAuthUserState, selectUserId } from '@frontend/user/state';
import { OAuthService } from 'angular-oauth2-oidc';
import { defer } from 'rxjs';


@Component({
  selector: 'frontend-shared-ui-header-container',
  template: `
    <frontend-shared-ui-header [appName]='appName' [drawer]='drawer' [authUser]='authUser$ | async'
                               (login)='oAuth2Flow()'>
    </frontend-shared-ui-header>
  `,
  styles: [``]
})
export class SharedUiHeaderContainerComponent {
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;
  authUser$ = this.store.select(selectAuthUserState);

  constructor(private store: Store<IAuthUser>, private authService: OAuthService) {
    console.log(`token: ${this.authService.getAccessToken()}`)
  }

  oAuth2Flow() {
    defer(() => this.authService.initLoginFlow()).subscribe(value => console.log(`Value: ${value}`));
  }
}
