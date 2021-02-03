import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpContainerComponent } from './containers/sign-up-container.component';

const routes: Routes = [
  {path: '', component: SignUpContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedAuthFeatureSignUpRoutingModule { }
