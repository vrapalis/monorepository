import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {AboutContainerComponent} from './containers/about-container.component';
import {AboutComponent} from './components/about.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

export const websitesVrapalisFeatureAboutRoutes: Route[] = [
  {path: '', component: AboutContainerComponent}
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  //TODO BASE PATH
  return new TranslateHttpLoader(http, `./assets/i18n/about/`, '.json');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureAboutRoutes),
    PdfViewerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true,
    })
  ],
  declarations: [
    AboutContainerComponent,
    AboutComponent
  ],
})
export class WebsitesVrapalisFeatureAboutModule {
}
