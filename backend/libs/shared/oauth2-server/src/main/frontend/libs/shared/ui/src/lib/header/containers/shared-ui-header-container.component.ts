import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IAuthUser } from '@frontend/shared/model';
import { LOAD_AUTH_USER_ACTION, selectAuthUserState } from '@frontend/user/state';
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
export class SharedUiHeaderContainerComponent implements OnInit{
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;
  authUser$ = this.store.select(selectAuthUserState);

  constructor(private store: Store<IAuthUser>, private authService: OAuthService) {
    console.log(`token: ${authService.getAccessToken()}`)
  }

  oAuth2Flow() {
    defer(() => this.authService.initLoginFlow()).subscribe(value => console.log(`Value: ${value}`));
  }

  ngOnInit(): void {
    this.store.dispatch(LOAD_AUTH_USER_ACTION());
  }
}
