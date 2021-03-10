import { Component } from '@angular/core';
import { ECompanyButtonTypeModel } from '../models/button.model';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';
import { selectAuthUserState } from '@web-browser/shared/auth/state';

@Component({
  selector: 'web-browser-company-container',
  template: `
    <ng-container *ngIf='user$ | async as user;'>
      <web-browser-company (toggleEvent)='view = $event'></web-browser-company>
      <div *ngIf='view' class='companyContainer'>
        <ng-container *ngIf='(view == typeBtn.QR_CODE); else questsView;'>
          <web-browser-qr-code [companyName]='user.info.firstName + " " + user.info.surname'
                               (downloadPdfEvent)='downloadPdf($event)'></web-browser-qr-code>
        </ng-container>
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
  typeBtn = ECompanyButtonTypeModel;
  view: ECompanyButtonTypeModel;
  user$: Observable<UserModel>;

  constructor(private authState: Store<UserModel>) {
    this.user$ = authState.select(selectAuthUserState);
  }

  downloadPdf(pdfContainer: HTMLDivElement) {
    html2canvas(pdfContainer,  {
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

        pdf.addImage(image, 'JPEG',0, 0, imageWidth, imageHeight);
        pdf.save('qr-code.pdf');
      }).catch(err => console.error(err));
  }
}
