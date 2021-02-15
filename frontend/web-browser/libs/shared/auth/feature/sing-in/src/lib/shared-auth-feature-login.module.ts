import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAuthFeatureLoginRoutingModule } from './shared-auth-feature-login-routing.module';
import { SignInContainerComponent } from './containers/sign-in-container.component';
import { SignInComponent } from './components/sign-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ButtonModule, ContainersModule, FlatButtonModule, SharedUiModule } from '@web-browser/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedAuthGuardModule } from '@web-browser/shared/auth/guard';
import { SharedUtilModule } from '@web-browser/shared/util';

@NgModule({
  declarations: [SignInContainerComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedAuthFeatureLoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ContainersModule,
    FlatButtonModule,
    ButtonModule,
    SharedAuthStateModule,
    SharedAuthGuardModule,
    SharedUtilModule,
    SharedUiModule
  ]
})
export class SharedAuthFeatureLoginModule {
}
