import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInContainerComponent } from './containers/sign-in-container.component';
import { NotAuthGuardsService } from '@web-browser/shared/auth/guard';

const routes: Routes = [
  { path: '', component: SignInContainerComponent, canActivate: [NotAuthGuardsService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureLoginRoutingModule {
}
