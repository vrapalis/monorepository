import {NgModule} from '@angular/core';
import {AppRouterModule} from "./app-router.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavigationModule, PageNotFoundModule, ServiceUnavailableModule} from "@web/shared/ui";
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";
import {ENV_INJECTION_TOKEN} from "@web/oauth2-shared-utility";
import {environment} from "../environments/environment";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NavigationModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true
      }
    })
  ],
  exports: [
    NavigationModule,
    PageNotFoundModule,
    ServiceUnavailableModule,
    AppRouterModule,
  ],
  providers: [
    {
      provide: ENV_INJECTION_TOKEN, useValue: environment
    }
  ]
})
export class AppCoreModule {
}
