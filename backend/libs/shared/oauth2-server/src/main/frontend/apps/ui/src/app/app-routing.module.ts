import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@frontend/shared/ui';
import { FeatureHomeModule } from '@frontend/feature/home';
import { FeatureLoginModule } from '@frontend/feature/login';
import { OAuthGuardService } from '@frontend/shared/util';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => FeatureHomeModule, canLoad: [OAuthGuardService] },
  { path: 'login', loadChildren: () => FeatureLoginModule },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
