import { Component } from '@angular/core';

@Component({
  selector: 'entryou-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  width = 330;
  data = 'Your data';

  onCameraReady($event: boolean) {
    console.log($event);
  }

  onCameraError() {}

  qrCodeText($event: string) {
    console.log($event);
  }
}
