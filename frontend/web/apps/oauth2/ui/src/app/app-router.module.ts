import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () => import('@web/oauth2/feature/profile').then(mod => mod.Oauth2FeatureProfileModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRouterModule {
}
