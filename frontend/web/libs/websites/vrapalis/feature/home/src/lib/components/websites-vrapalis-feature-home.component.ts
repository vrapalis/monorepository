import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <main>
      <img src="assets/images/me.jpg">
      <section>
        <h1>Are you looking for a full stack senior developer?</h1>
        <p>
          I offer the following services:
          <br>
          - Frontend development (Angular or Vuejs)
          - Backend development (Spring Boot)
        </p>
      </section>
    </main>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
