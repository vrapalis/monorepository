import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BlogComponent } from './components/blog.component';
import { BlogContainerComponent } from './containers/blog-container.component';

export const websitesVrapalisFeatureBlogRoutes: Route[] = [
  {path: '', component: BlogContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureBlogRoutes)
  ],
  declarations: [
    BlogComponent,
    BlogContainerComponent
  ],
})
export class WebsitesVrapalisFeatureBlogModule {}
