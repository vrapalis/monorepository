import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeScannerComponent } from './qr-code-scanner.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InfoBoxModule } from '../info-box/info-box.module';


@NgModule({
  declarations: [QrCodeScannerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    InfoBoxModule
  ],
  exports: [QrCodeScannerComponent]
})
export class QrCodeScannerModule {
}
