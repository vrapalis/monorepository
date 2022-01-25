import {Component} from '@angular/core';
import {WebsitesVrapalisHomeDataAccessService} from "@web/websites/vrapalis/data-access";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'web-home',
  template: `
    <web-home-component [home]="home$ | async"></web-home-component>
    <ng-container *ngIf="fact$ | async; let fact">
      <p>{{fact | json}}</p>
    </ng-container>
  `,
  styles: []
})
export class WebsitesVrapalisFeatureHomeContainerComponent {
  home$ = this.homeService.getSingle('home');
  fact$ = this.http.get('https://catfact.ninja/fact', {observe: "body"});

  constructor(private http: HttpClient, private homeService: WebsitesVrapalisHomeDataAccessService) {
  }
}
