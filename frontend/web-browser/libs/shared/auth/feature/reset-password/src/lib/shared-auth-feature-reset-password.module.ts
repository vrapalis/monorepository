import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedAuthFeatureResetPasswordRoutingModule } from './shared-auth-feature-reset-password-routing.module';
import { ResetPasswordContainerComponent } from './containers/reset-password-container.component';
import { ResetPasswordComponent } from './components/reset-password.component';
import { SharedUiModule } from '@web-browser/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUtilModule } from '@web-browser/shared/util';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';

@NgModule({
  declarations: [ResetPasswordContainerComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedUtilModule,
    SharedAuthStateModule,
    SharedAuthFeatureResetPasswordRoutingModule,
    SharedUiModule
  ]
})
export class SharedAuthFeatureResetPasswordModule {
}
