import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {ENV_INJECTION_TOKEN} from '@web/oauth2-shared-utility';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {EntryouHeaderModule} from '@web/entryou/shared/ui';
import {
  MediaNotSupportedModule,
  PageNotFoundModule,
  PageWrapperModule,
  ServiceUnavailableModule,
} from '@web/shared/ui';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {EntryouSharedStateModule} from "@web/entryou/shared/state";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EntryouHeaderModule,
    PageNotFoundModule,
    PageWrapperModule,
    ServiceUnavailableModule,
    MediaNotSupportedModule,
    EntryouSharedStateModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
      },
    })
  ],
  providers: [
    {
      provide: ENV_INJECTION_TOKEN,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
