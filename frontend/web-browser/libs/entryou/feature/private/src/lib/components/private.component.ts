import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PrivateState, QrCodeModel } from '@web-browser/entryou/model';
import { UserModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'web-browser-private',
  template: `
    <web-browser-head-and-sub-title header='Kontaktlose Check in.'
                                    subHeader='Scannen Sie bitte die Eintrits-QR Code'>
    </web-browser-head-and-sub-title>
    <ng-container *ngIf='(privateState | async) as state'>
      <sh-ui-qr-code-scanner (qrCodeCameraReady)='onCameraReady($event)' (qrCodeError)='onCameraError()'
                             (qrCodeText)='qrCodeText($event)' *ngIf='!state.lastCheckIn; else checkOut'>
      </sh-ui-qr-code-scanner>
      <ng-template #checkOut>
        <web-browser-check-out [privateState]='state' (checkOutEvent)='checkout()'></web-browser-check-out>
      </ng-template>
    </ng-container>
  `,
  styles: []
})
export class PrivateComponent {
  @Input() user: UserModel;
  @Input() privateState: Observable<PrivateState>;
  @Output() getScannedQrCode = new EventEmitter<QrCodeModel>();
  @Output() checkOutEvent = new EventEmitter<void>();

  onCameraReady(cameraReady: boolean) {
  }

  onCameraError() {
  }

  qrCodeText(qrText: string) {
    const qrCode = JSON.parse(qrText) as QrCodeModel;
    this.getScannedQrCode.emit(qrCode);
  }

  checkout() {
    this.checkOutEvent.emit();
  }
}
