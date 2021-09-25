import
{Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {IBootstrapIconLink, ISideLink} from "@web/websites/shared/model";

@Component({
  selector: 'web-sh-ui-contact-side-link',
  template: `
    <web-sh-ui-contact-side-link-component [links]="links" (clickEvent)="onCLickEvent($event)">
    </web-sh-ui-contact-side-link-component>
  `,
  styles: []
})
export class ContactSideLinkContainerComponent {
  @Input() links!: ISideLink | null;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
  }

  onCLickEvent(link: IBootstrapIconLink) {
    if (isPlatformBrowser(this.platformId) && link.url) {
      window.open(link.url, '_blank');
    }
  }
}
