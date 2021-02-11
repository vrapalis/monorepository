import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { selectAuthUserState, signOutAction } from '@web-browser/shared/auth/state';
import { Observable } from 'rxjs';

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
          <ng-container *ngIf='user$ | async as user;'>
            <button mat-menu-item routerLink='sign-in' *ngIf='user.email == null; else templateLogout'
                    routerLinkActive='active-link'>
              <mat-icon>login</mat-icon>
              <span>Sign In</span>
            </button>
          </ng-container>
          <ng-template #templateLogout>
            <button mat-menu-item (click)='signOut()'>
              <mat-icon>logout</mat-icon>
              <span>Sign Out</span>
            </button>
          </ng-template>
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
  user$: Observable<UserModel>;

  constructor(private authState: Store<UserModel>) {
    this.user$ = this.authState.select(selectAuthUserState);
  }

  signOut() {
    this.authState.dispatch(signOutAction());
  }
}
