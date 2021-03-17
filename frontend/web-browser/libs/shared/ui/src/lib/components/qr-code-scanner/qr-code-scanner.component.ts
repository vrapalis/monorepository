import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import jsQR from 'jsqr';

@Component({
  selector: 'sh-ui-qr-code-scanner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='qrCoScContainer'>
      <video class='qrCoScVideo' #video></video>
      <canvas class='qrCoScCanvas' hidden #canvas></canvas>

      <sh-ui-info-box class='qrCoScInfoBox'
                      text='Achtung! Um QR-Code scannen zu können brauchen Sie ihre Handy Kamera. '
                      imgSrc='assets/images/info-box.svg' *ngIf='isInfoBlockShown'>
      </sh-ui-info-box>

      <div class='qrCoScButtonBock'>
        <button mat-fab color='accent' aria-label='QR Scanner Button' (click)='cameraClick()'>
          <mat-icon>{{buttonIcon}}</mat-icon>
        </button>
        <p class='mt-2 lightTextFn'>
          {{buttonText}}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['qr-code-scanner.component.scss']
})
export class QrCodeScannerComponent {
  @Input() intervalMs = 2000;
  @Output() qrCodeCameraReady = new EventEmitter<boolean>();
  @Output() qrCodeText = new EventEmitter<string>();
  @Output() qrCodeError = new EventEmitter<void>();

  @ViewChild('video')
  private player: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas')
  private canvas: ElementRef<HTMLCanvasElement>;
  private subscription: Subscription;
  buttonIcon = 'camera_alt';
  buttonText = 'Starten Sie Ihre Kamera';
  private buttonToggled: boolean;
  isInfoBlockShown = true;

  cameraClick() {
    const context = this.canvas.nativeElement.getContext('2d');
    const constraints = { video: true };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.toggleButton(stream, context);
      })
      .catch(err => this.qrCodeError.emit());
  }

  private toggleButton(stream, context) {
    this.buttonToggled = !this.buttonToggled;
    if (this.buttonToggled) {
      this.buttonIcon = 'stop';
      this.buttonText = 'Stopen Sie Ihre Kamera';
      this.isInfoBlockShown = false;
      this.qrCodeCameraReady.emit(true);
      this.player.nativeElement.srcObject = stream;
      this.player.nativeElement.play();
      this.readQrCode(context);
    } else {
      this.stopPlayer();
    }
  }

  private stopPlayer() {
    this.buttonToggled = false;
    this.subscription.unsubscribe();
    this.player.nativeElement.src = null;
    this.isInfoBlockShown = true;
    this.buttonIcon = 'camera_alt';
    this.buttonText = 'Starten Sie Ihre Kamera';
    this.qrCodeCameraReady.emit(false);
  }

  private readQrCode(context) {
    this.subscription = interval(this.intervalMs).subscribe(value => {
      context.drawImage(this.player.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      const imageData = context.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      // @ts-ignore
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        this.qrCodeText.emit(code.data);
        this.stopPlayer();
      }
    });
  }
}
