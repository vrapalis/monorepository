import {
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef,
  Inject, Input,
  OnDestroy, OnInit, QueryList, ViewChild,
  ViewChildren,
} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable, Subject, takeUntil} from "rxjs";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IBaseEnv} from "@web/websites/shared/model";
import * as gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DOCUMENT} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";
import {IService} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-vr-more',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnDestroy, AfterViewInit {
  @Input() services$?: Observable<Array<IService>>;
  isMobile = false;
  private destroyed$ = new Subject<void>();
  @ViewChild('moreHeaders') headers?: ElementRef<HTMLDivElement>;
  @ViewChild('info') info?: ElementRef<HTMLDivElement>;
  @ViewChildren('services') servicesList?: QueryList<ElementRef>;

  constructor(breakpointObserver: BreakpointObserver, @Inject(VR_ENV_IN_TOKEN) public env: IBaseEnv,
              @Inject(DOCUMENT) private doc: Document, public translate: TranslateService) {
    breakpointObserver.observe('(max-width: 1200px)')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(match => this.isMobile = match.matches);

    gsap.gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const headersEl = this.headers?.nativeElement;
    const infoEl = this.info?.nativeElement;
    if (headersEl) {
       gsap.gsap.from(headersEl, {
        y: 25,
        // opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headersEl,
          start: 'top 90%',
          id: 'headers',
          end: () => `+=${headersEl.offsetHeight}`,
          // scrub: true,
          // toggleActions: "restart reverse restart reverse",
          toggleActions: "play none none reverse",
        }
      }); //.restart() restart
    }

    if (infoEl) {
       gsap.gsap.from(infoEl, {
        y: 25,
        // opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: infoEl,
          start: 'top 90%',
          id: 'headers',
          end: () => `+=${infoEl.offsetHeight}`,
          // scrub: true,
          // toggleActions: "restart reverse restart reverse",
          toggleActions: "play none none reverse",
        }
      }); //.restart() restart
    }

    this.servicesList?.changes
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(list => list._results.forEach((el: ElementRef, index: number) => {
        gsap.gsap.from(el.nativeElement, {
          y: 25,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el.nativeElement,
            start: 'top 90%',
            end: () => `+=${(el.nativeElement as HTMLElement).offsetHeight}`,
            // scrub: true,
            // toggleActions: "restart reverse restart reverse",
            toggleActions: "play none none reverse",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
          }
        })
      }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    ScrollTrigger.getAll().forEach(scroll => {
      scroll.kill();
    });
  }
}
