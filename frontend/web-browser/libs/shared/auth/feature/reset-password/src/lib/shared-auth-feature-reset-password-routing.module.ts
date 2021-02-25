import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordContainerComponent } from './containers/reset-password-container.component';
import { NotAuthGuardsService } from '@web-browser/shared/auth/guard';
import { ResetPasswordConfirmContainerComponent } from './containers/reset-password-confirm-container.component';

const routes: Routes = [
  { path: '', component: ResetPasswordContainerComponent, canActivate: [NotAuthGuardsService] },
  { path: 'confirm', component: ResetPasswordConfirmContainerComponent, canActivate: [NotAuthGuardsService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureResetPasswordRoutingModule {
}
