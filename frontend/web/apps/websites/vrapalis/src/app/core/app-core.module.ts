import { NgModule } from '@angular/core';
import {
  WebShUiContactAssistantModule,
  WebShUiContactSideLinkModule,
  WebShUiNavbarModule,
  WebShUiPageNotFoundModule
} from '@web/websites/shared/ui';
import { AppCoreRoutingModule } from './app-core-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

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
    WebShUiNavbarModule,
    TranslateModule,
    WebShUiContactSideLinkModule,
    WebShUiPageNotFoundModule,
    WebShUiContactAssistantModule
  ]
})
export class AppCoreModule {
}
