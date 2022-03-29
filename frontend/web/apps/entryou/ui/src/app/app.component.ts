import {Component} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {UserFacade} from "@web/entryou/shared/state";

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {

  constructor(private userFacade: UserFacade) {
    userFacade.userLogin();
  }

}
