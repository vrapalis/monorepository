import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeaturePrivateRoutingModule } from './entryou-feature-private-routing.module';
import { PrivateContainerComponent } from './containers/private-container.component';
import { PrivateComponent } from './components/private.component';
import { PrivateGuardService } from './guards/private-guard.service';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';

@NgModule({
  imports: [
    CommonModule,
    EntryouFeaturePrivateRoutingModule,
    SharedAuthStateModule
  ],
  declarations: [PrivateContainerComponent, PrivateComponent],
  providers: [PrivateGuardService]
})
export class EntryouFeaturePrivateModule {
}
