import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './containers/sign-up-container.component';
import { NotAuthGuardsService } from '@web-browser/shared/auth/guard';
import { SignUpConfirmComponent } from './components/sign-up-confirm.component';

const routes: Routes = [
  { path: '', component: SignUpContainerComponent, canActivate: [NotAuthGuardsService] },
  { path: 'confirm', component: SignUpConfirmComponent, canActivate: [NotAuthGuardsService], pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureSignUpRoutingModule {
}
