import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {
  WebsitesVrapalisFeatureHomeContainerComponent
} from './containers/websites-vrapalis-feature-home-container.component';
import {HomeComponentComponent} from './components/home/websites-vrapalis-feature-home.component';
import {MarkdownModule} from 'ngx-markdown';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ProjectComponent} from './components/projects/project.component';
import {NgImageSliderModule} from "ng-image-slider";
import {ServicesComponent} from './components/services/services.component';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {InfoComponent} from "./components/info/info.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  //TODO BASE PATH
  return new TranslateHttpLoader(http, `./assets/i18n/home/`, '.json');
}

export const websitesVrapalisFeatureHomeRoutes: Route[] = [
  {path: '', component: WebsitesVrapalisFeatureHomeContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureHomeRoutes),
    MarkdownModule.forChild(),
    NgImageSliderModule,
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
    WebsitesVrapalisFeatureHomeContainerComponent,
    HomeComponentComponent,
    ProjectComponent,
    ServicesComponent,
    InfoComponent
  ]
})
export class WebsitesVrapalisFeatureHomeModule {
}
