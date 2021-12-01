import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeCnComponent } from './containers/home-cn.component';
import { SharedUiModule } from '@frontend/shared/ui';
import { FeatureProfileModule } from '@frontend/feature/profile';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: HomeCnComponent, children: [
          { path: '', redirectTo: 'profile' },
          {
            path: 'profile',
            loadChildren: () => import('@frontend/feature/profile').then(mod => mod.FeatureProfileModule)
          }
        ]
      }
    ]),
    SharedUiModule
  ],
  declarations: [
    HomeCnComponent
  ]
})
export class FeatureHomeModule {
}
