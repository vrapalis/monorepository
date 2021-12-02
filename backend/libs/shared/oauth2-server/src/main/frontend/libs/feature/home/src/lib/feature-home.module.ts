import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeCnComponent } from './containers/home-cn.component';
import { NotFoundComponent, SharedUiModule } from '@frontend/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeCnComponent, children: [
          { path: '', redirectTo: 'profile' },
          {
            path: 'profile',
            loadChildren: () => import('@frontend/feature/profile').then(mod => mod.FeatureProfileModule)
          },
          {
            path: 'users',
            loadChildren: () => import('@frontend/feature/users').then(mod => mod.FeatureUsersModule)
          },
          {
            path: 'clients',
            loadChildren: () => import('@frontend/feature/clients').then(mod => mod.FeatureClientsModule)
          }
        ]
      },
      { path: '**', component: NotFoundComponent }
    ]),
    SharedUiModule
  ],
  declarations: [
    HomeCnComponent
  ]
})
export class FeatureHomeModule {
}
