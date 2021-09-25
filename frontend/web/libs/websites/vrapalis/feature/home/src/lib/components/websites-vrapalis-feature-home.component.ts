import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <div *ngIf="home" class='wrapper row justify-content-center justify-content-xl-start justify-content-xxl-evenly'>
      <div class="col col-xl-auto"></div>
      <div class='profile col-12 col-xl-5 col-xxl-4'>
        <img [src]="home.profile.url">
      </div>
      <div class='description col-12 mt-4 text-start text-xl-center mt-xl-0 col-xl-6 col-xxl-7 p-1 p-xl-2'>
        <markdown [data]='home.profileDescription'></markdown>
      </div>
    </div>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
