import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAuthFeatureRegistrationRoutingModule } from './shared-auth-feature-registration-routing.module';
import { RegistrationComponent } from './components/registration.component';
import { RegistrationContainerComponent } from './containers/registration-container.component';


@NgModule({
  declarations: [RegistrationComponent, RegistrationContainerComponent],
  imports: [
    CommonModule,
    SharedAuthFeatureRegistrationRoutingModule
  ]
})
export class SharedAuthFeatureRegistrationModule {
}
