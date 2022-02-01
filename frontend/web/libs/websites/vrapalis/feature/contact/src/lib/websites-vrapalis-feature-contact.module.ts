import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {ContactContainerComponent} from './containers/contact-container.component';
import {ContactComponent} from './components/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule
  ],
})
export class WebsitesVrapalisFeatureContactModule {
}
