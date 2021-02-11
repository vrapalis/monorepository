import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './containers/sign-up-container.component';
import { NotAuthGuardsService } from '@web-browser/shared/auth/guard';

const routes: Routes = [
  { path: '', component: SignUpContainerComponent, canActivate: [NotAuthGuardsService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureSignUpRoutingModule {
}
