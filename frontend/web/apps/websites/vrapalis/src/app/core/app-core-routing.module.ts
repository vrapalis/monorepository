import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebsitesVrapalisFeatureHomeModule} from '@web/websites/vrapalis/feature/home';
import {WebsitesVrapalisFeatureBlogModule} from '@web/websites/vrapalis/feature/blog';
import {WebsitesVrapalisFeatureProjectsModule} from '@web/websites/vrapalis/feature/projects';
import {WebShUiPageNotFoundContainerComponent} from '@web/websites/shared/ui';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('@web/websites/vrapalis/feature/home').then(mod => mod.WebsitesVrapalisFeatureHomeModule)
  },
  {path: 'blog', loadChildren: () => WebsitesVrapalisFeatureBlogModule},
  {path: 'projects', loadChildren: () => WebsitesVrapalisFeatureProjectsModule},
  {path: '**', component: WebShUiPageNotFoundContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppCoreRoutingModule {
}
