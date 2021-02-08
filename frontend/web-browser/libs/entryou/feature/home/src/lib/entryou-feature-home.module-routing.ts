import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './containers/home/home-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryouFeatureHomeModuleRouting {
}
