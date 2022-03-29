import {Component} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ClientFacade} from "@web/entryou/shared/state";

@Component({
  selector: 'entryou-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  client$ = this.clientFacade.client$;

  constructor(private clientFacade: ClientFacade) {
  }

}
