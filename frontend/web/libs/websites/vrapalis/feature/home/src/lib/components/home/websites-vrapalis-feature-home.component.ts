import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <main>
      <div class="home">
        <img src="assets/images/me.jpg">
        <section>
          <h1 innerHTML="{{'pages.home.header' | translate }}"></h1>
          <h3 innerHTML="{{'pages.home.subheader' | translate }}"></h3>
          <button class="btn-more" (click)="homeMore.scrollIntoView({ behavior: 'smooth'})">
            {{'pages.home.btn-more' | translate }}
          </button>
        </section>
      </div>
      <article class="info">
        <p innerHTML="{{'pages.home.info' | translate }}"></p>
      </article>
      <div class="home-projects">
        <web-vr-project></web-vr-project>
      </div>
      <hr>
      <div class="home-more" #homeMore>
        <web-vr-more></web-vr-more>
      </div>
    </main>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
