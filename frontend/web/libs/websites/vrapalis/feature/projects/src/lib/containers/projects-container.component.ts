import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'web-projects-container',
  template: `
    <main class="projects-wr">
      <web-projects-component *ngFor="let project of [1,2,3, 4]">
        <mat-card-footer>
          <mat-progress-bar [mode]="project % 2 === 0 ? 'indeterminate':'query'"></mat-progress-bar>
        </mat-card-footer>
      </web-projects-component>
    </main>
  `,
  styleUrls: ['projects-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent {
}
