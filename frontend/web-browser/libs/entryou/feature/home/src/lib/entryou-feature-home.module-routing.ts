import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './containers/home-container.component';
import { AuthGuardsService } from '@web-browser/shared/auth/guard';
import { EntryouFeatureCompanyModule } from '@web-browser/entryou/feature/company';
import { EntryouFeaturePrivateModule } from '@web-browser/entryou/feature/private';

const routes: Routes = [
  {
    path: '', component: HomeContainerComponent, canActivate: [AuthGuardsService],
    children: [
      { path: '', redirectTo: 'company' },
      { path: 'company', loadChildren: () => EntryouFeatureCompanyModule, canLoad: [AuthGuardsService] },
      { path: 'private', loadChildren: () => EntryouFeaturePrivateModule, canLoad: [AuthGuardsService] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryouFeatureHomeModuleRouting {
}
