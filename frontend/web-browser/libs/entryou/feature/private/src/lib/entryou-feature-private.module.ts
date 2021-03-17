import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeaturePrivateRoutingModule } from './entryou-feature-private-routing.module';
import { PrivateContainerComponent } from './containers/private-container.component';
import { PrivateComponent } from './components/private.component';
import { PrivateGuardService } from './guards/private-guard.service';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedUtilModule } from '@web-browser/shared/util';
import { EntryouUiModule } from '@web-browser/entryou/ui';
import { InfoBoxModule, QrCodeScannerModule } from '@web-browser/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    EntryouFeaturePrivateRoutingModule,
    SharedAuthStateModule,
    SharedUtilModule,
    EntryouUiModule,
    QrCodeScannerModule
  ],
  declarations: [PrivateContainerComponent, PrivateComponent],
  providers: [PrivateGuardService]
})
export class EntryouFeaturePrivateModule {
}
