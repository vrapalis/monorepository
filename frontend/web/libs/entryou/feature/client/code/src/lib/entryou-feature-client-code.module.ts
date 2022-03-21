import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CodeComponent} from "./coponents/code.component";
import {SharedUiCodeModule, SharedUiScannerModule} from "@web/shared/ui";

@NgModule({
  declarations: [CodeComponent],
  imports: [
    CommonModule,
    SharedUiCodeModule,
    SharedUiScannerModule,
    RouterModule.forChild([
      {path: '', component: CodeComponent}
    ]),
  ],
})
export class EntryouFeatureClientCodeModule {
}
