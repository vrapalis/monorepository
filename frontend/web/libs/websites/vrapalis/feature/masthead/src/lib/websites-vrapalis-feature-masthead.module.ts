import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {MastheadComponent} from './components/masthead.component';

export const websitesVrapalisFeatureMastheadRoutes: Route[] = [
  {path: '', component: MastheadComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(websitesVrapalisFeatureMastheadRoutes)],
  declarations: [
    MastheadComponent
  ],
})
export class WebsitesVrapalisFeatureMastheadModule {
}
