import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProjectsComponent } from './components/projects.component';
import { ProjectsContainerComponent } from './containers/projects-container.component';
import {MatCardModule} from "@angular/material/card";

export const websitesVrapalisFeatureProjectsRoutes: Route[] = [
  { path: '', component: ProjectsContainerComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(websitesVrapalisFeatureProjectsRoutes), MatCardModule],
  declarations: [
    ProjectsComponent,
    ProjectsContainerComponent
  ]
})
export class WebsitesVrapalisFeatureProjectsModule {
}
