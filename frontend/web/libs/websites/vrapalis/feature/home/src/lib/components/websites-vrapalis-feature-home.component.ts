import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <main>
      <img src="assets/images/me.jpg">
      <section>
        <h1 innerHTML="{{'pages.home.header' | translate }}"></h1>
        <p innerHTML="{{'pages.home.text' | translate }}"></p>
      </section>
    </main>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
