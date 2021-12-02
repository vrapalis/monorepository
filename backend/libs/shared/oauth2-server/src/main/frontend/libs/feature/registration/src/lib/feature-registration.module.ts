import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationCnComponent } from './containers/registration-cn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: RegistrationCnComponent}
    ]),
  ],
  declarations: [
    RegistrationCnComponent
  ],
})
export class FeatureRegistrationModule {}
