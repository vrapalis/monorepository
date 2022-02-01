import {Component} from '@angular/core';

@Component({
  selector: 'web-projects-component',
  template: `
    <div class="card">
      <img>
      <div class="card-body">
        <ng-content></ng-content>
        <h5 class="card-title mt-3">Project title</h5>
        <p class="card-text">
          Some content about project ... <br>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <a href="#" class="btn btn-primary">Go to project</a>
      </div>
    </div>
  `,
  styles: [`
    .card {
      width: 25rem;
      margin: 20px;
    }

    img {
      height: 200px;
      object-fit: contain;
      width: 100%;
      background: #cccccc;
    }
  `]
})
export class ProjectsComponent {
}
