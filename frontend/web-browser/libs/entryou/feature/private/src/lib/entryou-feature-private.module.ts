import
{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeaturePrivateRoutingModule } from './entryou-feature-private-routing.module';
import { PrivateContainerComponent } from './containers/private-container.component';
import { QrScannerComponent } from './components/qr-scanner.component';
import { PrivateGuardService } from './guards/private-guard.service';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedUtilModule } from '@web-browser/shared/util';
import { CardModule, EnButtonModule, EntryouUiModule } from '@web-browser/entryou/ui';
import { BasicPaginatorModule, QrCodeScannerModule, ToggleButtonModule } from '@web-browser/shared/ui';
import { CheckInModule } from '@web-browser/entryou/data-access';
import { EntryouStateModule } from '@web-browser/entryou/state';
import { CheckOutComponent } from './components/check-out.component';
import { CheckinsComponent } from './components/checkins.component';

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
    EnButtonModule,
    ToggleButtonModule,
    CardModule,
    BasicPaginatorModule
  ],
  declarations: [PrivateContainerComponent, QrScannerComponent, CheckOutComponent, CheckinsComponent],
  providers: [PrivateGuardService]
})
export class EntryouFeaturePrivateModule {
}
