import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {ContactContainerComponent} from './containers/contact-container.component';
import {ContactComponent} from './components/contact.component';

export const websitesVrapalisFeatureContactRoutes: Route[] = [
  {path: "", component: ContactContainerComponent}
];

@NgModule({
  declarations: [
    ContactContainerComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(websitesVrapalisFeatureContactRoutes),
  ],
})
export class WebsitesVrapalisFeatureContactModule {
}
