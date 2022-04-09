import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebShUiPageNotFoundContainerComponent} from '@web/websites/shared/ui';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('@web/websites/vrapalis/feature/home').then(mod => mod.WebsitesVrapalisFeatureHomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('@web/websites/vrapalis/feature/about').then(mod => mod.WebsitesVrapalisFeatureAboutModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@web/websites/vrapalis/feature/projects').then(mod => mod.WebsitesVrapalisFeatureProjectsModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('@web/websites/vrapalis/feature/blog').then(mod => mod.WebsitesVrapalisFeatureBlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('@web/websites/vrapalis/feature/contact').then(mod => mod.WebsitesVrapalisFeatureContactModule)
  },
  {
    path: 'masthead',
    loadChildren: () => import('@web/websites/vrapalis/feature/masthead').then(mod => mod.WebsitesVrapalisFeatureMastheadModule)
  },
  {path: '**', component: WebShUiPageNotFoundContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking', scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppCoreRoutingModule {
}
