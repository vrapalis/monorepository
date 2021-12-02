import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@frontend/shared/ui';
import { OAuthGuardService } from '@frontend/shared/util';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('@frontend/feature/home').then(mod => mod.FeatureHomeModule),
    canLoad: [OAuthGuardService]
  },
  { path: 'login', loadChildren: () => import('@frontend/feature/login').then(mod => mod.FeatureLoginModule) },
  { path: 'registration', loadChildren: () => import('@frontend/feature/registration').then(mod => mod.FeatureRegistrationModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
