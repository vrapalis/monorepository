import {
  AfterViewInit,
  Component, ElementRef,
  Inject,
  Input,
  OnDestroy, QueryList,
  ViewChildren,
} from '@angular/core';
import {IMore} from "@web/websites/vrapalis/model";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IBaseEnv} from "@web/websites/shared/model";
import * as gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'web-vr-more',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnDestroy, AfterViewInit {
  @Input() services = new Array<IMore>();
  isMobile = false;
  private destroyed$ = new Subject<void>();
  @ViewChildren('sections') sectionList?: QueryList<ElementRef>;
  @ViewChildren('images') imageList?: QueryList<ElementRef>;

  constructor(breakpointObserver: BreakpointObserver, @Inject(VR_ENV_IN_TOKEN) public env: IBaseEnv, @Inject(DOCUMENT) private doc: Document) {
    breakpointObserver.observe('(max-width: 900px)')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(match => this.isMobile = match.matches);

    gsap.gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.imageList?.changes
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(list => list._results.forEach((el: ElementRef, index: number) => {
        gsap.gsap.from(el.nativeElement, {
          x: index % 2 === 0 ? -100 : 100,
          y: index % 2 === 0 ? -100 : 100,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: el.nativeElement,
            start: 'top 80%',
            end: () => `+=${(el.nativeElement as HTMLElement).offsetHeight}`,
            scrub: true,
            // toggleActions: "restart reverse restart reverse",
            toggleActions: "play none none reset",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
          }
        })
      }))

    this.sectionList?.changes
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(list => list._results.forEach((el: ElementRef, index: number) => {
        gsap.gsap.from(el.nativeElement, {
          // x: index % 2 === 0 ? 100 : -100,
          // y: index % 2 === 0 ? 100 : -100,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: el.nativeElement,
            start: 'top 80%',
            end: () => `+=${(el.nativeElement as HTMLElement).offsetHeight}`,
            scrub: true,
            // toggleActions: "restart reverse restart reverse",
            toggleActions: "play none none reset",
            // play pause resume reverse restart reset complete none
            // onEnter onLeave onEnterBack onLeaveBack
            // markers: true,
          }
        })
      }))

  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
