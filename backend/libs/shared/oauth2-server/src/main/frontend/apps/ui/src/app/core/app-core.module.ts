import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../../environments/environment';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedUiModule } from '@frontend/shared/ui';
import { ENV_INJECT_TOKEN, SharedUtilEnvService } from '@frontend/shared/util';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { GlobalStateModule } from '@frontend/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    NoopAnimationsModule,
    GlobalStateModule,
  ],
  exports: [RouterModule, SharedUiModule],
  providers: [
    { provide: ENV_INJECT_TOKEN, useValue: environment },
    SharedUtilEnvService,
  ],
})
export class AppCoreModule {}
