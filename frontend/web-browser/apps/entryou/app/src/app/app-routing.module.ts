import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedAuthFeatureLoginModule } from '@web-browser/shared/auth/feature/sing-in';
import { SharedAuthFeatureSignUpModule } from '@web-browser/shared/auth/feature/sing-up';
import { EntryouFeatureHomeModule } from '@web-browser/entryou/feature/home';
import { AuthGuardsService, NotAuthGuardsService } from '@web-browser/shared/auth/guard';
import { SharedAuthFeatureResetPasswordModule } from '@web-browser/shared/auth/feature/reset-password';
import { SharedAuthFeatureProfileModule } from '@web-browser/shared/auth/feature/profile';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', loadChildren: () => EntryouFeatureHomeModule,
    canLoad: [AuthGuardsService]
  },
  {
    path: 'sign-in', pathMatch: 'full', loadChildren: () => SharedAuthFeatureLoginModule,
    canLoad: [NotAuthGuardsService]
  },
  {
    path: 'reset-password', loadChildren: () => SharedAuthFeatureResetPasswordModule,
    canLoad: [NotAuthGuardsService]
  },
  {
    path: 'sign-up', loadChildren: () => SharedAuthFeatureSignUpModule
  },
  {
    path: 'profile', loadChildren: () => SharedAuthFeatureProfileModule,
    canLoad: [AuthGuardsService]
  },
  {
    path: '**', redirectTo: 'home'
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
