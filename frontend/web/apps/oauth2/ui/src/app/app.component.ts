import {Component, OnInit} from '@angular/core';
import {ILinkModel} from "@web/shared/model";
import {OAuthService} from "angular-oauth2-oidc";
import {AuthService, EnvService} from "@web/oauth2-shared-utility";

@Component({
  selector: 'web-root',
  template: `
    <web-sh-ui-navigation [links]="links">
      <router-outlet></router-outlet>
    </web-sh-ui-navigation>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  links: Array<ILinkModel> = [
    {text: 'Profile', routerLink: 'profile'},
    {text: 'Users', routerLink: 'users'},
    {text: 'Clients', routerLink: 'clients'}
  ];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.tryToLogin();
  }
}
