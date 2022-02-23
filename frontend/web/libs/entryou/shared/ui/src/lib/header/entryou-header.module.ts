import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryouHeaderComponent} from './components/entryou-header.component';
import {EntryouHeaderContainerComponent} from './containers/entryou-header-container.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    EntryouHeaderComponent,
    EntryouHeaderContainerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    EntryouHeaderContainerComponent
  ]
})
export class EntryouHeaderModule {
}
