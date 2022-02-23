import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeComponent} from './components/code.component';
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule
  ],
  exports: [CodeComponent]
})
export class SharedUiCodeModule {
}
