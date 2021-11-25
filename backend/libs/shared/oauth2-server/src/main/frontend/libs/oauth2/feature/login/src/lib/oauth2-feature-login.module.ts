import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Oauth2FeatureLoginContainerComponent } from './containers/feature-login-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: Oauth2FeatureLoginContainerComponent,
      },
    ]),
  ],
  declarations: [Oauth2FeatureLoginContainerComponent],
})
export class Oauth2FeatureLoginModule {}
