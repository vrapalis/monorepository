import { Component } from '@angular/core';
import { QrCodeModel } from '@web-browser/entryou/model';
import { CheckInService } from '@web-browser/entryou/data-access';


@Component({
  selector: 'web-browser-private-container',
  template: `
    <div>
      <web-browser-private (getScannedQrCode)='onQrCodeScan($event)'></web-browser-private>
    </div>
  `,
  styles: []
})
export class PrivateContainerComponent {

  constructor(private checkInService: CheckInService) {
  }

  onQrCodeScan(qrCode: QrCodeModel) {
    this.checkInService.checkIn().subscribe((msg) => console.log(qrCode));
  }
}
