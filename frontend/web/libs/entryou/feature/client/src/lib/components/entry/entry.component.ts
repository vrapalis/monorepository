import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getRouterParam} from "@web/shared/utility";

@Component({
  selector: 'entryou-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  id$ = this.aRouter.params.pipe(getRouterParam('id'));

  constructor(private aRouter: ActivatedRoute) {
  }

}
