import {Component} from '@angular/core';
import {WebsitesVrapalisHomeDataAccessService} from "@web/websites/vrapalis/data-access";

@Component({
  selector: 'web-home',
  template: `
    <web-home-component [home]="home | async"></web-home-component>
  `,
  styles: []
})
export class WebsitesVrapalisFeatureHomeContainerComponent {
  home = this.homeService.getSingle('home');

  constructor(private homeService: WebsitesVrapalisHomeDataAccessService) {
  }
}
