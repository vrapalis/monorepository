import {Component} from '@angular/core';
import {AuthService} from "@web/oauth2-shared-utility";

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styles: [`

  `],
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.tryToLogin();
  }
}
