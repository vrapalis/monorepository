import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileContainerComponent } from './containers/profile-container.component';
import { AuthGuardsService } from '@web-browser/shared/auth/guard';

const routes: Routes = [
  { path: '', component: ProfileContainerComponent, canActivate: [AuthGuardsService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureProfileRoutingModule {
}
