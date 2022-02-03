import {Component} from '@angular/core';

@Component({
  selector: 'web-contact',
  template: `
    <main>
      <section>
        <h1>Contact</h1>

        <p>
          Vitali Rapalis <br>
          <strong>Email:</strong> vitali.rapalis@gmail.com <br>
          <strong>Mobile:</strong> +49 174 5215204 <br>
        </p>
      </section>
    </main>
  `,
  styles: [`
    strong {
      color: rgba(19, 120, 155, 0.84);
    }
    h1, p {
      color: rgba(243, 236, 236, 0.91);
    }
  `]
})
export class ContactComponent {


}
