import {Component, Input} from '@angular/core';
import {ICreatedProject} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-projects-component',
  template: `
    <div class="project-card-wrapper">
      <ng-container *ngIf="project">
        <img [src]="project.img">
        <div class="card-body">
          <h4 class="card-title mt-3" [innerHTML]="project.title"></h4>
          <h5 class="card-title mt-3" *ngIf="project.subTitle.length > 0" [innerHTML]="project.subTitle"></h5>
          <p class="card-text" [innerHTML]="project.text"></p>
          <a href="#" class="btn btn-more" [innerHTML]="project.btnTxt"></a>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
  @Input() project?: ICreatedProject;
}
