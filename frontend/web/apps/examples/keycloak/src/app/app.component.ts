import { Component } from '@angular/core';

@Component({
  selector: 'web-root',
  template: `
    <nav class='navbar navbar-dark bg-dark'>
      <div class='container-fluid'>
        <span class='navbar-brand mb-0 h1'>Keycloak Example</span>
        <div class='d-flex'>
          <button type="button" class="btn btn-link">Login</button>
        </div>
      </div>
    </nav>

    <div class='container-fluid mt-3'>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
}
