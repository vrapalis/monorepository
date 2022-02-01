import {Component, Input} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-home-component',
  template: `
    <main>
      <img src="assets/images/me.jpg">
      <section>
        <h1>Are you looking for a <strong>full</strong> stack senior <strong>developer </strong>?</h1>
        <br>
        <p>
          I offer the following services:
          <br>
          <br>
          - <strong>Frontend</strong> development (Angular or Vuejs)
          <br>
          - <strong>Backend</strong> development (Spring Boot)
        </p>
      </section>
    </main>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss']
})
export class HomeComponentComponent {
  @Input() home!: IHome | null;
}
