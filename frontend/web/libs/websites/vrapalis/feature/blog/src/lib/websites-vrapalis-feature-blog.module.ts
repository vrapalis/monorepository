import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {BlogComponent} from './components/blog.component';
import {BlogContainerComponent} from './containers/blog-container.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

export const websitesVrapalisFeatureBlogRoutes: Route[] = [
  {path: '', component: BlogContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureBlogRoutes),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    BlogComponent,
    BlogContainerComponent
  ],
})
export class WebsitesVrapalisFeatureBlogModule {
}
