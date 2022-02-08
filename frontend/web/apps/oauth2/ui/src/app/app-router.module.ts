import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent, ServiceUnavailableComponent} from "@web/shared/ui";
import {IsAuthGuard} from "@web/oauth2-shared-utility";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
  {
    path: 'profile',
    pathMatch: 'full',
    canLoad: [IsAuthGuard],
    loadChildren: () => import('@web/oauth2/feature/profile').then(mod => mod.Oauth2FeatureProfileModule)
  },
  {
    path: 'users',
    pathMatch: 'full',
    canLoad: [IsAuthGuard],
    loadChildren: () => import('@web/oauth2/feature/users').then(mod => mod.Oauth2FeatureUsersModule)
  },
  {
    path: 'clients',
    pathMatch: 'full',
    canLoad: [IsAuthGuard],
    loadChildren: () => import('@web/oauth2/feature/clients').then(mod => mod.Oauth2FeatureClientsModule)
  },
  {
    path: 'service-unavailable',
    component: ServiceUnavailableComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
