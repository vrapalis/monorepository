import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@frontend/shared/ui';
import { OAuthGuardService } from '@frontend/shared/util';
import { FeatureProfileModule } from '@frontend/feature/profile';
import { FeatureHomeModule } from '@frontend/feature/home';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => FeatureHomeModule },
  { path: 'profile', loadChildren: () => FeatureProfileModule, canLoad: [OAuthGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
