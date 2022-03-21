import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntryouGroupBtnComponent} from './components/entryou-group-btn.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    EntryouGroupBtnComponent
  ],
    imports: [
        CommonModule,
        MatButtonToggleModule,
        RouterModule
    ],
  exports: [EntryouGroupBtnComponent]
})
export class EntryouUiGroupButtonModule {
}
