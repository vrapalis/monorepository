import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: ProfileComponent}
    ]),
  ],
  declarations: [
    ProfileComponent
  ],
})
export class Oauth2FeatureProfileModule {}
