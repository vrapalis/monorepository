import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeCnComponent } from './containers/home-cn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: HomeCnComponent}
    ]),
  ],
  declarations: [
    HomeCnComponent
  ],
})
export class FeatureHomeModule {}
