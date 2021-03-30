import
{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeaturePrivateRoutingModule } from './entryou-feature-private-routing.module';
import { PrivateContainerComponent } from './containers/private-container.component';
import { PrivateComponent } from './components/private.component';
import { PrivateGuardService } from './guards/private-guard.service';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedUtilModule } from '@web-browser/shared/util';
import { EnButtonModule, EntryouUiModule } from '@web-browser/entryou/ui';
import { QrCodeScannerModule } from '@web-browser/shared/ui';
import { CheckInModule } from '@web-browser/entryou/data-access';
import { EntryouStateModule } from '@web-browser/entryou/state';
import { CheckOutComponent } from './components/check-out.component';

@NgModule({
  imports: [
    CommonModule,
    EntryouFeaturePrivateRoutingModule,
    SharedAuthStateModule,
    SharedUtilModule,
    EntryouUiModule,
    QrCodeScannerModule,
    CheckInModule,
    EntryouStateModule,
    SharedAuthStateModule,
    EnButtonModule
  ],
  declarations: [PrivateContainerComponent, PrivateComponent, CheckOutComponent],
  providers: [PrivateGuardService]
})
export class EntryouFeaturePrivateModule {
}
