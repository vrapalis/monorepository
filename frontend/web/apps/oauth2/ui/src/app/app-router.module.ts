import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () => import('@web/oauth2/feature/profile').then(mod => mod.Oauth2FeatureProfileModule)
  },
  {
    path: 'users',
    pathMatch: 'full',
    loadChildren: () => import('@web/oauth2/feature/users').then(mod => mod.Oauth2FeatureUsersModule)
  },
  {
    path: 'clients',
    pathMatch: 'full',
    loadChildren: () => import('@web/oauth2/feature/clients').then(mod => mod.Oauth2FeatureClientsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRouterModule {
}
