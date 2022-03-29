import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  MediaNotSupportedComponent,
  PageNotFoundComponent,
  ServiceUnavailableComponent,
} from '@web/shared/ui';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client',
  },
  {
    path: 'client',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@web/entryou-feature-client-home').then(
        (mod) => mod.EntryouFeatureClientHomeModule
      ),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('@web/entryou/feature/company').then(
        (mod) => mod.EntryouFeatureCompanyModule
      ),
  },
  {path: 'media-not-supported', component: MediaNotSupportedComponent},
  {path: 'service-unavailable', component: ServiceUnavailableComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
