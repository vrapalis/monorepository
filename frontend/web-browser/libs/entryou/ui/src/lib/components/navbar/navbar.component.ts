import { Component } from '@angular/core';

@Component({
  selector: 'web-browser-navbar',
  template: `
    <mat-toolbar color='primary'>
      <mat-toolbar-row>
        <span routerLink=''>Entryou</span>
        <span class='nav-spacer'></span>
        <button mat-icon-button [matMenuTriggerFor]='menu' aria-label='Navbar menu'>
          <mat-icon>menu</mat-icon>
        </button>
        <mat-menu #menu='matMenu'>
          <button mat-menu-item routerLink='login' routerLinkActive='active-link'>
            <mat-icon>login</mat-icon>
            <span>Login</span>
          </button>
        </mat-menu>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    .nav-spacer {
      flex: 1 1 auto;
    }

    button:focus, span:focus {
      outline: none;
    }

    span:hover {
      cursor: pointer;
    }
  `]
})
export class NavbarComponent {
}
