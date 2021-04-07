import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { RxStompService } from '@stomp/ng2-stompjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'web-browser-company-container',
  template: `
    <ng-container *ngIf='user$ | async as user;'>
      <sh-ui-toggle-button buttonFirstText='QR Code' buttonFirstValue='qr-code'
                           buttonSecondText='Besucher' buttonSecondValue='besucher'
                           (valueChangedEvent)='onToggle($event)'>
      </sh-ui-toggle-button>
      <div class='companyContainer'>
        <web-browser-qr-code *ngIf='isQrCode; else questsView;' [companyId]='user.info.id'
                             [companyName]='user.info.companyName'
                             (downloadPdfEvent)='downloadPdf($event)'></web-browser-qr-code>
        <ng-template #questsView>
          <web-browser-quests></web-browser-quests>
        </ng-template>
      </div>
    </ng-container>
  `,
  styles: [`
    .companyContainer {
      margin: auto;
    }
  `]
})
export class CompanyContainerComponent {
  user$: Observable<UserModel>;
  isQrCode = true;

  constructor(private authState: Store<UserModel>, private rxStompService: RxStompService) {
    this.user$ = authState.select(selectAuthUserState)
      .pipe(
        tap(user => {
          if (user.info) {
            this.rxStompService.watch(`/exchange/check-in-exchange/${user.info.id}`).subscribe(value => {
              console.log(value);
            });
          }
        })
      );
  }

  downloadPdf(pdfContainer: HTMLDivElement) {
    html2canvas(pdfContainer, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    })
      .then(canvas => {
        const pdf = new jsPDF.jsPDF({
          unit: 'mm',
          format: 'a4'
        });

        const image = canvas.toDataURL('image/jpeg', 1.0);
        const imageWidth = 208;
        const imageHeight = canvas.height * imageWidth / canvas.width;

        pdf.addImage(image, 'JPEG', 0, 0, imageWidth, imageHeight);
        pdf.save('qr-code.pdf');
      }).catch(err => console.error(err));
  }

  onToggle($event: string) {
    this.isQrCode = $event === 'qr-code' ? true : false;
  }
}
