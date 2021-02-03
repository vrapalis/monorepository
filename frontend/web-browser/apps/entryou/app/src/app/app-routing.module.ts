import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedAuthFeatureLoginModule } from '@web-browser/shared/auth/feature/sing-in';
import { SharedAuthFeatureSignUpModule } from '@web-browser/shared/auth/feature/sing-up';

const routes: Routes = [
  {
    path: 'sign-in', pathMatch: 'full', loadChildren: () => SharedAuthFeatureLoginModule
  },
  {
    path: 'sign-up', pathMatch: 'full', loadChildren: () => SharedAuthFeatureSignUpModule
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
