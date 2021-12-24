import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileCnComponent } from './containers/profile-cn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProfileCnComponent }
    ])
  ],
  declarations: [
    ProfileCnComponent
  ]
})
export class FeatureProfileModule {
}
