import {Component} from '@angular/core';
import {WebsitesVrapalisHomeDataAccessService} from "@web/websites/vrapalis/data-access";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'web-home',
  template: `
    <web-home-component [home]="home$ | async"></web-home-component>
  `,
  styles: []
})
export class WebsitesVrapalisFeatureHomeContainerComponent {
  home$ = this.homeService.getSingle('assets/content/home.json');

  constructor(private http: HttpClient, private homeService: WebsitesVrapalisHomeDataAccessService) {
  }
}
