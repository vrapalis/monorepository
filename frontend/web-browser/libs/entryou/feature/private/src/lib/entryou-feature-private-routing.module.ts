import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContainerComponent } from './containers/private-container.component';
import { AuthGuardsService } from '@web-browser/shared/auth/guard';
import { PrivateGuardService } from './guards/private-guard.service';

const routes: Routes = [
  { path: '', component: PrivateContainerComponent, canActivate: [AuthGuardsService, PrivateGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryouFeaturePrivateRoutingModule {
}
