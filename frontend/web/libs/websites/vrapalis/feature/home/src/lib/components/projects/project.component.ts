import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'web-vr-project',
  template: `
    <ng-image-slider [images]="imgCollection" #nav [infinite]="true" [showArrow]="false" [imagePopup]="false"
                     [autoSlide]="{interval: 5, stopOnHover: false}"
                     [imageSize]="{width: 180, height: 60, space: 30}"></ng-image-slider>
  `,
  styleUrls: ['project.component.scss'],
})
export class ProjectComponent {
  imgCollection: Array<object> = [
    {
      thumbImage: 'assets/images/dzb.svg',
      alt: 'Dzb',
    },
    {
      thumbImage: 'assets/images/bitfuel.svg',
      alt: 'Bitfuel',
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
}
