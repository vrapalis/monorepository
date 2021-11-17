import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFeaturesHomeModule } from '@frontend/client/features/home';
import { UserFeaturesProfileModule } from '@frontend/user/features/profile';
import { NotFoundComponent } from '@frontend/shared/ui';
import { HomeModule } from '@frontend/home';
import { AuthGuardService } from '@frontend/shared/util';
import { UserFeaturesHomeModule } from '@frontend/user/features/home';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'clients', loadChildren: () => ClientFeaturesHomeModule, canLoad: [AuthGuardService] },
  { path: 'users', loadChildren: () => UserFeaturesHomeModule, canLoad: [AuthGuardService] },
  { path: 'profile', loadChildren: () => UserFeaturesProfileModule, canLoad: [AuthGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
