import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'web-vr-project',
  template: `
    <ng-image-slider [images]="imgCollection" #nav [infinite]="true" [showArrow]="false" [imagePopup]="false"
                     [autoSlide]="{interval: 4, stopOnHover: false}"
                     [imageSize]="{width: imageWidth, height: imageHeight, space: 30}"></ng-image-slider>
  `,
  styleUrls: ['project.component.scss'],
})
export class ProjectComponent implements OnDestroy {
  imgCollection: Array<object> = [
    {
      thumbImage: 'assets/images/schaeffler-icon.svg',
      alt: 'Schaeffler',
    },
    {
      thumbImage: 'assets/images/msg-icon.svg',
      alt: 'Msg',
    },
    {
      thumbImage: 'assets/images/lidl-icon.svg',
      alt: 'Lidl',
    },
    {
      thumbImage: 'assets/images/schwarz-icon.svg',
      alt: 'Schwarz It',
    },
    {
      thumbImage: 'assets/images/dzb-icon.svg',
      alt: 'Dzb',
    },
    {
      thumbImage: 'assets/images/smawandi-icon.svg',
      alt: 'Smawandi',
    }
  ];
  private unsubscribe$ = new Subject<void>();
  imageWidth = 200;
  imageHeight = 70;
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
