import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'web-vr-project',
  template: `
    <ng-image-slider [images]="imgCollection" #nav [infinite]="true" [showArrow]="false" [imagePopup]="false"
                     [autoSlide]="{interval: 5, stopOnHover: false}"
                     [imageSize]="{width: imageWidth, height: imageHeight, space: 30}"></ng-image-slider>
  `,
  styleUrls: ['project.component.scss'],
})
export class ProjectComponent implements OnDestroy {
  imgCollection: Array<object> = [
    {
      thumbImage: 'assets/images/dzb.svg',
      alt: 'Dzb',
    },
    {
      thumbImage: 'assets/images/msg.svg',
      alt: 'Msg',
    },
    {
      thumbImage: 'assets/images/lidl.svg',
      alt: 'Lidl',
    },
    {
      thumbImage: 'assets/images/smawandi.svg',
      alt: 'Smawandi',
    },
    {
      thumbImage: 'assets/images/schaeffler.svg',
      alt: 'Schaeffler',
    }
  ];
  private unsubscribe$ = new Subject<void>();
  imageWidth = 180;
  imageHeight = 60;
  imageSpace = 30;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe('(max-width: 768px)')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(matcher => this.changeImageSize(matcher.matches));
  }

  changeImageSize = (isMaxMediumScreen: boolean) => {
    if(isMaxMediumScreen) {
      this.imageWidth = 120;
      this.imageHeight = 50;
      this.imageSpace = 0;
    }else {
      this.imageWidth = 180;
      this.imageHeight = 60;
      this.imageSpace = 30;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
