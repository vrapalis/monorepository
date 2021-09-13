import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeContainerComponent } from './containers/home-container.component';
import { HomeComponentComponent } from './components/home.component';

export const websitesVrapalisFeatureHomeRoutes: Route[] = [
  { path: '', component: HomeContainerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureHomeRoutes)
  ],
  declarations: [
    HomeContainerComponent,
    HomeComponentComponent
  ]
})
export class WebsitesVrapalisFeatureHomeModule {
}
