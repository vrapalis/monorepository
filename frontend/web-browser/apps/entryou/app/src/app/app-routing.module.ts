import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedAuthFeatureLoginModule } from '@web-browser/shared/auth/feature/login';
import { SharedAuthFeatureRegistrationModule } from '@web-browser/shared/auth/feature/registration';

const routes: Routes = [
  {
    path: 'login', pathMatch: 'full', loadChildren: () => SharedAuthFeatureLoginModule
  },
  {
    path: 'registration', pathMatch: 'full', loadChildren: () => SharedAuthFeatureRegistrationModule
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
