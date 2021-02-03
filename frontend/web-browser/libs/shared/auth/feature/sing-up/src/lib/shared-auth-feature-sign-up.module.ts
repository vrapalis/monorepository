import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAuthFeatureSignUpRoutingModule } from './shared-auth-feature-sign-up-routing.module';
import { SignUpComponent } from './components/sign-up.component';
import { SignUpContainerComponent } from './containers/sign-up-container.component';


@NgModule({
  declarations: [SignUpComponent, SignUpContainerComponent],
  imports: [
    CommonModule,
    SharedAuthFeatureSignUpRoutingModule
  ]
})
export class SharedAuthFeatureSignUpModule {
}
