import { Component } from '@angular/core';

@Component({
  selector: 'web-blog-component',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image>
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 30rem;
      margin: 20px;
    }

    img {
      height: 250px;
      width: 100%;
      background: #cccccc;
      object-fit: contain;
    }
  `]
})
export class BlogComponent {

}
