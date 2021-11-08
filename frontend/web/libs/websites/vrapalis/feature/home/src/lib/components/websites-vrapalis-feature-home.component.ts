import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <div *ngIf="home" class='wrapper row align-items-start'>
      <div class='profile col-12 col-md-4 col-lg-3'>
        <img [src]="home.profile.url">
      </div>
      <div class='description col-12 col-md-8 col-lg-9'>
        <markdown [data]='home.profileDescription'></markdown>
      </div>

      <div class="row justify-content-center">
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
    </div>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
