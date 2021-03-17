import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'web-browser-private',
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

  onCameraReady(cameraReady: boolean) {
  }

  onCameraError() {

  }

  qrCodeText(qrText: string) {
    console.log(qrText);
  }
}
