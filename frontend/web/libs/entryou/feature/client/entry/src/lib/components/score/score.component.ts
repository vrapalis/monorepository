import {Component} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ClientFacade} from "@web/entryou/shared/state";

@Component({
  selector: 'entryou-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  client$ = this.clientFacade.client$;

  constructor(private clientFacade: ClientFacade) {
  }

}
