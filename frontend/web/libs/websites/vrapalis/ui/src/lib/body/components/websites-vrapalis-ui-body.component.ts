import {Component} from '@angular/core';

@Component({
  selector: 'web-websites-vrapalis-ui-body',
  template: `
    <div class="wrapper text-center">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['websites-vrapalis-ui-body.component.scss']
})
export class WebsitesVrapalisUiBodyComponent {
}
