import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {
  WebsitesVrapalisFeatureHomeContainerComponent
} from './containers/websites-vrapalis-feature-home-container.component';
import {HomeComponentComponent} from './components/home/websites-vrapalis-feature-home.component';
import {MarkdownModule} from 'ngx-markdown';
import {TranslateModule} from "@ngx-translate/core";
import {ProjectComponent} from './components/projects/project.component';
import {NgImageSliderModule} from "ng-image-slider";
import { MoreComponent } from './components/more/more.component';

export const websitesVrapalisFeatureHomeRoutes: Route[] = [
  {path: '', component: WebsitesVrapalisFeatureHomeContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureHomeRoutes),
    MarkdownModule.forChild(),
    TranslateModule,
    NgImageSliderModule
  ],
  declarations: [
    WebsitesVrapalisFeatureHomeContainerComponent,
    HomeComponentComponent,
    ProjectComponent,
    MoreComponent
  ]
})
export class WebsitesVrapalisFeatureHomeModule {
}
