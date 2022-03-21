import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EntriesComponent} from "./components/entries.component";

@NgModule({
  declarations: [EntriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntriesComponent,
        children: [{
          path: ':id',
          loadChildren: () => import('@web/entryou/feature/client/entry').then(mod => mod.EntryouFeatureClientEntryModule)
        }]
      }
    ]),
  ],
})
export class EntryouFeatureClientEntriesModule {
}
