import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeatureCompanyRoutingModule } from './entryou-feature-company-routing.module';
import { CompanyComponent } from './components/company.component';
import { CompanyContainerComponent } from './containers/company-container.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { CompanyGuardService } from './guards/company-guard.service';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { QuestsComponent } from './components/quests.component';
import { QRCodeModule } from 'angularx-qrcode';
import { LogoModule, RaisedButtonModule } from '@web-browser/shared/ui';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { rxStompConfig } from './configs/rx-stomp.config';

@NgModule({
  imports: [
    CommonModule,
    EntryouFeatureCompanyRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    SharedAuthStateModule,
    QRCodeModule,
    RaisedButtonModule,
    LogoModule
  ],
  declarations: [CompanyComponent, CompanyContainerComponent, QrCodeComponent, QuestsComponent],
  providers: [
    CompanyGuardService,
    {
      provide: InjectableRxStompConfig,
      useValue: rxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class EntryouFeatureCompanyModule {
}
