import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediaNotSupportedComponent, PageNotFoundComponent, ServiceUnavailableComponent} from "@web/shared/ui";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client',
  },
  {
    path: 'client',
    // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
    loadChildren: () => import('@web/entryou/feature/client').then(mod => mod.EntryouFeatureClientModule)
  },
  {
    path: 'company',
    loadChildren: () => import('@web/entryou/feature/company').then(mod => mod.EntryouFeatureCompanyModule)
  },
  {path: 'media-not-supported', component: MediaNotSupportedComponent},
  {path: 'service-unavailable', component: ServiceUnavailableComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
