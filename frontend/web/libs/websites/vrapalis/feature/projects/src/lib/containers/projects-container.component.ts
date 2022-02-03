import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'web-projects-container',
  template: `
    <main class="projects-wr">
      <web-projects-component *ngFor="let project of [1,2,3, 4]">
      </web-projects-component>
    </main>
  `,
  styleUrls: ['projects-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent {
}
