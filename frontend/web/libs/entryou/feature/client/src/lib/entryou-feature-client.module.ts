import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EntryouFeatureClientContainerComponent} from './containers/entryou-feature-client-container.component';
import {GroupButtonModule} from "@web/entryou/shared/ui";
import {CodeComponent} from './components/code/code.component';
import {EntriesComponent} from './components/entries/entries.component';
import {SharedUiCodeModule, SharedUiScannerModule} from "@web/shared/ui";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: EntryouFeatureClientContainerComponent,
        children: [
          {path: '', redirectTo: 'entries'},
          {path: 'entries', component: EntriesComponent},
          {path: 'code', component: CodeComponent},
        ]
      },
    ]),
    GroupButtonModule,
    SharedUiCodeModule,
    SharedUiScannerModule
  ],
  declarations: [
    EntryouFeatureClientContainerComponent,
    CodeComponent,
    EntriesComponent,
  ],
})
export class EntryouFeatureClientModule {
}
