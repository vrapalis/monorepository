import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild, ViewEncapsulation} from '@angular/core';
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {fromEvent, Observable, Subscription} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'web-about',
  template: `
    <section class="about-wrapper">
      <div class="about-text">
        <div style="height: 100vh;" *ngIf="!pdfShow"></div>
        <div [ngStyle]="{ height: pdfViewerHeight + 10 + 'px' }" style="position: relative; width: 100%">
          <pdf-viewer style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
                      [src]="pdfSrc"
                      [show-all]="false"
                      [autoresize]="true"
                      [original-size]="false"
                      [fit-to-page]="true"
                      (page-rendered)="pageRendered()"
          ></pdf-viewer>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnDestroy, AfterViewInit {
  pdfSrc = '/assets/pdf/Vitali_Rapalis_Lebenslauf.pdf';
  public pdfViewerHeight = 100;
  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent?: PdfViewerComponent;
  private resizeObservable$?: Observable<Event>;
  private resizeSubscription$?: Subscription;
  pdfShow = false;

  constructor(private cd: ChangeDetectorRef, private spinner: NgxSpinnerService) {
  }

  public ngOnDestroy() {
    this.resizeSubscription$ && this.resizeSubscription$.unsubscribe();
  }

  public pageRendered() {
    this.spinner.hide();
    this.pdfShow = true;
    // initial set
    this.pdfViewerHeight = this.pdfComponent?.pdfViewer.viewer.clientHeight;

    // on resize
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(() => {
      this.pdfShow = true;
      this.spinner.hide();
      this.pdfViewerHeight = this.pdfComponent?.pdfViewer.viewer.clientHeight;
      this.cd.markForCheck();
    });
  }

  ngAfterViewInit(): void {
    this.spinner.show();
  }

}
