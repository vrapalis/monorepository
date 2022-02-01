import {Component} from '@angular/core';

@Component({
  selector: 'web-blog',
  template: `
    <main>
      <web-blog-component *ngFor="let blog of [1,1,1]"></web-blog-component>
    </main>
  `,
  styles: [`
    main {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  `]
})
export class BlogContainerComponent {

}
