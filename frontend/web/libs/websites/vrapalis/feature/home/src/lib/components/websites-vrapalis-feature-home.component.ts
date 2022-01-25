import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";
import {Observable} from "rxjs";

@Component({
  selector: 'web-home-component',
  template: `
    <div *ngIf="home" class='home-wrapper row align-items-start justify-content-center'>

      <div class="profile col-12 row justify-content-center">
        <img [src]="home.profile.url" class="col-12 offset-xl-1 col-md-4 col-xl-3 col-xxl-3">
        <markdown [data]='home.profileDescription'
                  class='text-md-start text-center col-12 col-md-8 col-xl-8 col-xxl-8'></markdown>
      </div>

      <div class="projects col-12 row justify-content-center" *ngIf="home.projects">
        <h2 markdown>{{home.projects.title}}</h2>

        <a class="col-12 col-md-auto m-3" *ngFor="let project of home.projects.projects" [href]="project.linkUrl"
           target="_blank">
          <img [src]="project.picture.url">
        </a>
      </div>

    </div>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
