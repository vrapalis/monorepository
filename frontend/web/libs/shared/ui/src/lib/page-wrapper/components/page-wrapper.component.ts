import {Component} from '@angular/core';

@Component({
  selector: 'web-sh-ui-page-wrapper',
  template: `
    <main class="page-wrapper">
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['page-wrapper.component.scss']
})
export class PageWrapperComponent {

}
