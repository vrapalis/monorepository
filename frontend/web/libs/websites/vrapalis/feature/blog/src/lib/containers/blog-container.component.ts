import {Component} from '@angular/core';

@Component({
  selector: 'web-blog',
  template: `
    <div class="blog-wrapper">
      <web-blog-component *ngFor="let blog of [1,1,1]"></web-blog-component>
    </div>
  `,
  styleUrls: ['blog-container.component.scss']
})
export class BlogContainerComponent {

}
