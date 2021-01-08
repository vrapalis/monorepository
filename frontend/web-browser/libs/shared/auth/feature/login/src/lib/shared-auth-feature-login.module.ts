import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAuthFeatureLoginRoutingModule } from './shared-auth-feature-login-routing.module';
import { LoginContainerComponent } from './containers/login-container.component';
import { LoginComponent } from './components/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ButtonModule, ContainersModule, FlatButtonModule } from '@web-browser/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginContainerComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedAuthFeatureLoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ContainersModule,
    FlatButtonModule,
    ButtonModule
  ]
})
export class SharedAuthFeatureLoginModule {
}
