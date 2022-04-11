import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {ProjectsComponent} from './components/projects.component';
import {ProjectsContainerComponent} from './containers/projects-container.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  //TODO BASE PATH
  return new TranslateHttpLoader(http, `./assets/i18n/project/`, '.json');
}

export const websitesVrapalisFeatureProjectsRoutes: Route[] = [
  {path: '', component: ProjectsContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureProjectsRoutes),
    MatCardModule,
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
    ProjectsComponent,
    ProjectsContainerComponent
  ]
})
export class WebsitesVrapalisFeatureProjectsModule {
}
