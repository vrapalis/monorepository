import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContainerComponent } from './containers/private-container.component';
import { AuthGuardsService } from '@web-browser/shared/auth/guard';

const routes: Routes = [
  { path: '', component: PrivateContainerComponent, canActivate: [AuthGuardsService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryouFeaturePrivateRoutingModule {
}
