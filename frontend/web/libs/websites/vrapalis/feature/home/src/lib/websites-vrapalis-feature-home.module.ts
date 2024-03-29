import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WebsitesVrapalisFeatureHomeContainerComponent } from './containers/websites-vrapalis-feature-home-container.component';
import { HomeComponentComponent } from './components/websites-vrapalis-feature-home.component';
import { MarkdownModule } from 'ngx-markdown';
import {WebsitesVrapalisHomeDataAccessModule} from "@web/websites/vrapalis/data-access";

export const websitesVrapalisFeatureHomeRoutes: Route[] = [
  { path: '', component: WebsitesVrapalisFeatureHomeContainerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureHomeRoutes),
    MarkdownModule.forChild(),
    WebsitesVrapalisHomeDataAccessModule
  ],
  declarations: [
    WebsitesVrapalisFeatureHomeContainerComponent,
    HomeComponentComponent
  ]
})
export class WebsitesVrapalisFeatureHomeModule {
}
