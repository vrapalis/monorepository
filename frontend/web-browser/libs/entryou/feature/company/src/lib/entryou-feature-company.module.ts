import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeatureCompanyRoutingModule } from './entryou-feature-company-routing.module';
import { CompanyComponent } from './components/company.component';
import { CompanyContainerComponent } from './containers/company-container.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { CompanyGuardService } from './guards/company-guard.service';
import { QrCodeComponent } from './components/qr-code.component';
import { QuestsComponent } from './components/quests.component';

@NgModule({
  imports: [
    CommonModule,
    EntryouFeatureCompanyRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    SharedAuthStateModule
  ],
  declarations: [CompanyComponent, CompanyContainerComponent, QrCodeComponent, QuestsComponent],
  providers: [CompanyGuardService]
})
export class EntryouFeatureCompanyModule {}
