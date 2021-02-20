import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordContainerComponent } from './containers/reset-password-container.component';
import { NotAuthGuardsService } from '@web-browser/shared/auth/guard';

const routes: Routes = [
  { path: '', component: ResetPasswordContainerComponent, canActivate: [NotAuthGuardsService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureResetPasswordRoutingModule {
}
