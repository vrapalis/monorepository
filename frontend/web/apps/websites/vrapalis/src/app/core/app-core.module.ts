import {NgModule} from '@angular/core';
import {
  WebShUiContactAssistantModule,
  WebShUiContactSideLinkModule,
  WebShUiPageNotFoundModule
} from '@web/websites/shared/ui';
import {AppCoreRoutingModule} from './app-core-routing.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../../environments/environment';
import {MarkdownModule} from 'ngx-markdown';
import {WebsitesVrapalisHeaderModule, WebsitesVrapalisUiBodyModule} from "@web/websites/vrapalis/ui";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {WebsitesVrapalisSideLinkModule} from "@web/websites/vrapalis/data-access";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  //TODO BASEPATH
  return new TranslateHttpLoader(http, `${environment.basePath}/assets/i18n/`, '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
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
    WebShUiContactSideLinkModule,
    WebShUiPageNotFoundModule,
    WebShUiContactAssistantModule,
    WebsitesVrapalisHeaderModule,
    WebsitesVrapalisSideLinkModule,
    WebsitesVrapalisUiBodyModule
  ],
  providers: [
    {provide: VR_ENV_IN_TOKEN, useValue: environment}
  ]
})
export class AppCoreModule {
}
