import {Component, OnInit} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ClientFacade} from "@web/entryou/shared/state";

@Component({
  selector: 'entryou-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  client$ = this.clientFacade.client$;

  constructor(private clientFacade: ClientFacade) {
  }

}
