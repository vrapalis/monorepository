import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediaNotSupportedComponent, PageNotFoundComponent, ServiceUnavailableComponent} from "@web/shared/ui";
import {SharedIsMobileGuard} from "@web/shared/utility";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client',
  },
  {
    path: 'client',
    loadChildren: () => import('@web/entryou/feature/client').then(mod => mod.EntryouFeatureClientModule)
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
