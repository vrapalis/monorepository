import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsCnComponent } from './containers/clients-cn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: ClientsCnComponent}
    ]),
  ],
  declarations: [
    ClientsCnComponent
  ],
})
export class FeatureClientsModule {}
