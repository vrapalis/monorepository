import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {AboutContainerComponent} from './containers/about-container.component';
import {AboutComponent} from './components/about.component';
import {PdfViewerModule} from "ng2-pdf-viewer";

export const websitesVrapalisFeatureAboutRoutes: Route[] = [
  {path: '', component: AboutContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureAboutRoutes),
    PdfViewerModule,
  ],
  declarations: [
    AboutContainerComponent,
    AboutComponent
  ],
})
export class WebsitesVrapalisFeatureAboutModule {
}
