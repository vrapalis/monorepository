import { ChangeDetectionStrategy, Component, ElementRef, Output, ViewChild, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'web-browser-qr-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='pdfQrCodeContainer'>
      <h3 class='fw-bold pdfQrCodeTitle'>Ihr PDF</h3>
      <div #pdfContainer class='pdfContainer'>
        <sh-ui-logo title='Entryou' imgSrc='assets/images/logo.svg'></sh-ui-logo>
        <qrcode class='pdfQrCode' [qrdata]="'Your data string'" [width]='256'
                [errorCorrectionLevel]="'M'"></qrcode>
        <div class='pdfInfoBlock'>
          <h4 class='subHeaderFn'>{{companyName}}</h4>
          <h5 class='headerFn'>Herzlich Willkommen</h5>
          <p class='pdfTextBox lightTextFn'>
            Alle Ihre Daten sind verschlüsselt. Echte Daten werden nur mit Anfrage von Gesundheitsamt entschlüsselt.
          </p>
        </div>
      </div>

      <div class='mt-5'>
        <sh-ui-raised-button (click)='downloadPdf()' type='accent'>Download Pdf</sh-ui-raised-button>
      </div>
    </div>
  `,
  styleUrls: ['qr-code.component.scss']
})
export class QrCodeComponent {
  @ViewChild('pdfContainer') private pdfContainer: ElementRef<HTMLDivElement>;
  @Output() downloadPdfEvent = new EventEmitter<HTMLDivElement>();
  @Input() companyName: string;

  downloadPdf() {
    this.downloadPdfEvent.emit(this.pdfContainer.nativeElement);
  }
}
