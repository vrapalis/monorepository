import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAuthFeatureSignUpRoutingModule } from './shared-auth-feature-sign-up-routing.module';
import { SignUpComponent } from './components/sign-up.component';
import { SignUpContainerComponent } from './containers/sign-up-container.component';
import { SharedAuthGuardModule } from '@web-browser/shared/auth/guard';
import { SharedUiModule } from '@web-browser/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUtilModule } from '@web-browser/shared/util';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';


@NgModule({
  declarations: [SignUpComponent, SignUpContainerComponent],
  imports: [
    CommonModule,
    SharedAuthFeatureSignUpRoutingModule,
    SharedUiModule,
    SharedAuthStateModule,
    SharedAuthGuardModule,
    ReactiveFormsModule,
    SharedUtilModule
  ]
})
export class SharedAuthFeatureSignUpModule {
}
