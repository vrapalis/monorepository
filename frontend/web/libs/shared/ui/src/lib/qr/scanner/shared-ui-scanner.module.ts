import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScannerComponent} from './components/scanner.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ScannerComponent]
})
export class SharedUiScannerModule {
}
