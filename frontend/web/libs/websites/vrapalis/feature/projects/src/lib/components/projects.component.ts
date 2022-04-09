import {Component} from '@angular/core';

@Component({
  selector: 'web-projects-component',
  template: `
    <div class="project-card-wrapper">
      <img>
      <div class="card-body">
        <h5 class="card-title mt-3">Project title</h5>
        <p class="card-text">
          Some content about project ... <br>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <a href="#" class="btn btn-more">Go to project</a>
      </div>
    </div>
  `,
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {
}
