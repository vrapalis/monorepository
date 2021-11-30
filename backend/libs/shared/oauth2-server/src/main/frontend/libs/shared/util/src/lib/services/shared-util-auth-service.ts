import { Injectable } from '@angular/core';
import { OAuthErrorEvent, OAuthEvent, OAuthInfoEvent, OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { takeUntil } from 'rxjs/operators';
import { TRY_TO_RECEIVE_TOKEN_ACTION, UserState } from '@frontend/state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilAuthService {

  constructor(private oauthService: OAuthService, private state: Store<UserState>) {
    this.oauthEvents();
  }

  private oauthEvents() {
    this.oauthService.events
      .subscribe(event => {
        console.log(event);
        switch (event.type) {
          case 'token_received':
            this.state.dispatch(TRY_TO_RECEIVE_TOKEN_ACTION());
            return;
          case 'discovery_document_loaded':
            if(event instanceof OAuthSuccessEvent) {
              if(event.info !== null) {
                this.state.dispatch(TRY_TO_RECEIVE_TOKEN_ACTION());
              }
            }
            return;
          default:
            return;
        }
      });
  }

  onLoginEvent() {
    this.oauthService.initLoginFlow();
  }
}