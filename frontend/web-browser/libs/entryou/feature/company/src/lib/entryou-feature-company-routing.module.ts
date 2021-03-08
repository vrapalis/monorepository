import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyContainerComponent } from './containers/company-container.component';
import { AuthGuardsService } from '@web-browser/shared/auth/guard';
import { CompanyGuardService } from './guards/company-guard.service';

const routes: Routes = [
  { path: '', component: CompanyContainerComponent, canActivate: [AuthGuardsService, CompanyGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryouFeatureCompanyRoutingModule {
}
