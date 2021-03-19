import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { QrCodeModel } from '@web-browser/entryou/model';

@Component({
  selector: 'web-browser-private',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <web-browser-head-and-sub-title header='Kontaktlose Check in.'
                                    subHeader='Scannen Sie bitte die Eintrits-QR Code'>
    </web-browser-head-and-sub-title>
    <sh-ui-qr-code-scanner (qrCodeCameraReady)='onCameraReady($event)' (qrCodeError)='onCameraError()'
                           (qrCodeText)='qrCodeText($event)'>
    </sh-ui-qr-code-scanner>
  `,
  styles: []
})
export class PrivateComponent {
  @Output() getScannedQrCode = new EventEmitter<QrCodeModel>();

  onCameraReady(cameraReady: boolean) {
  }

  onCameraError() {
  }

  qrCodeText(qrText: string) {
    const qrCode = JSON.parse(qrText) as QrCodeModel;
    this.getScannedQrCode.emit(qrCode);
  }
}
