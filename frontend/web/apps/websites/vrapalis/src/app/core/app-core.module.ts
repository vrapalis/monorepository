import {NgModule} from '@angular/core';
import {
  WebShUiPageNotFoundModule
} from '@web/websites/shared/ui';
import {AppCoreRoutingModule} from './app-core-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../../environments/environment';
import {MarkdownModule} from 'ngx-markdown';
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {WebShUiPageModule} from "@web/websites/vrapalis/ui";
import {BrowserModule, BrowserTransferStateModule} from "@angular/platform-browser";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  //TODO BASE PATH
  return new TranslateHttpLoader(http, `./assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MarkdownModule.forRoot()
  ],
  exports: [
    AppCoreRoutingModule,
    TranslateModule,
    WebShUiPageNotFoundModule,
    WebShUiPageModule
  ],
  providers: [
    {provide: VR_ENV_IN_TOKEN, useValue: environment}
  ]
})
export class AppCoreModule {
}
