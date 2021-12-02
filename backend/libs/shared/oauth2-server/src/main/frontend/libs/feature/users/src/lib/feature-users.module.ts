import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersCnComponent } from './containers/users-cn.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: UsersCnComponent}
    ]),
  ],
  declarations: [
    UsersCnComponent
  ],
})
export class FeatureUsersModule {}
