import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EntryouFeatureClientHomeContainerComponent} from './components/entryou-feature-client-container.component';
import {EntryouUiGroupButtonModule} from '@web/entryou/shared/ui';

@NgModule({
  declarations: [
    EntryouFeatureClientHomeContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntryouFeatureClientHomeContainerComponent,
        children: [
          {path: '', redirectTo: 'entries', pathMatch: 'full'},
          {
            path: 'entries',
            loadChildren: () => import('@web/entryou/feature/client/entries').then(mod => mod.EntryouFeatureClientEntriesModule),
          },
          {
            path: 'code',
            loadChildren: () => import('@web/entryou/feature/client/code').then(mod => mod.EntryouFeatureClientCodeModule)
          },
        ],
      },
    ]),
    EntryouUiGroupButtonModule
  ]
})
export class EntryouFeatureClientHomeModule {
}
