import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAuthFeatureProfileRoutingModule } from './shared-auth-feature-profile-routing.module';
import { ProfileContainerComponent } from './containers/profile-container.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAuthFeatureProfileRoutingModule
  ],
  declarations: [ProfileContainerComponent, ProfileComponent]
})
export class SharedAuthFeatureProfileModule {
}
