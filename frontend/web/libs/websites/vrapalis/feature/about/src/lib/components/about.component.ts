import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {fromEvent, Observable, Subscription} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";
import {IBaseEnv} from "@web/websites/shared/model";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";

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

        <a [href]="pdfSrc" class="btn mt-5 btn-more" target="_blank"
           [download]="pdfName">
          Download
        </a>
      </div>
    </section>
  `,
  styleUrls: ['about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnDestroy, AfterViewInit {
  pdfName = "Vitali_Rapalis_CV.pdf";
  pdfSrc = this.env.production === true ? `https://vrapalis.github.io/monorepository/assets/pdf/${this.pdfName}` :
    `/assets/pdf/${this.pdfName}`;
  public pdfViewerHeight = 100;
  @ViewChild(PdfViewerComponent, {static: false})
  private pdfComponent?: PdfViewerComponent;
  private resizeObservable$?: Observable<Event>;
  private resizeSubscription$?: Subscription;
  pdfShow = false;

  constructor(@Inject(VR_ENV_IN_TOKEN) private env: IBaseEnv, private cd: ChangeDetectorRef, private spinner: NgxSpinnerService) {
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
