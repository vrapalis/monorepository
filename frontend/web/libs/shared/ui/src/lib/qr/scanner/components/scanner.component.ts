import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {interval, Subscription} from "rxjs";
import jsQR from "jsqr";

@Component({
  selector: 'web-sh-ui-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {
  @Input() intervalMs = 2000;
  @Output() qrCodeCameraReady = new EventEmitter<boolean>();
  @Output() qrCodeText = new EventEmitter<string>();
  @Output() qrCodeError = new EventEmitter<void>();

  @ViewChild('video')
  private player?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas')
  private canvas?: ElementRef<HTMLCanvasElement>;
  private subscription?: Subscription;
  buttonIcon = 'camera_alt';
  buttonText = 'Starten Sie Ihre Kamera';
  private buttonToggled?: boolean;
  isInfoBlockShown = true;

  cameraClick() {
    const context = this.canvas?.nativeElement.getContext('2d');
    const constraints = {
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440
        },
        facingMode: 'environment'
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        this.toggleButton(stream, context);
      })
      .catch(err => this.qrCodeError.emit());
  }

  private toggleButton(stream: any, context: any) {
    this.buttonToggled = !this.buttonToggled;
    if (this.buttonToggled) {
      this.buttonIcon = 'stop';
      this.buttonText = 'Stopen Sie Ihre Kamera';
      this.isInfoBlockShown = false;
      this.qrCodeCameraReady.emit(true);
      if (this.player) {
        this.player.nativeElement.srcObject = stream;
        this.player.nativeElement.play();
      }
      this.readQrCode(context);
    } else {
      this.stopPlayer();
    }
  }

  private stopPlayer() {
    this.buttonToggled = false;
    this.subscription?.unsubscribe();
    if (this.player) {
      this.player.nativeElement.src = '';
    }
    this.isInfoBlockShown = true;
    this.buttonIcon = 'camera_alt';
    this.buttonText = 'Starten Sie Ihre Kamera';
    this.qrCodeCameraReady.emit(false);
  }

  private readQrCode(context: any) {
    this.subscription = interval(this.intervalMs).subscribe(value => {
      if (this.player && this.canvas) {
        context.drawImage(this.player.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        const imageData = context.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
          this.qrCodeText.emit(code.data);
          this.stopPlayer();
        }
      }
    });
  }
}
