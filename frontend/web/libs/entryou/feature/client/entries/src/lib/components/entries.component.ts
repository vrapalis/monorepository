import {Component} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {RouterFacade} from '@web/entryou/shared/state';

@Component({
  selector: 'web-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss'],
})
export class EntriesComponent {
  entryId$ = this.routerFacade.getClientEntryId$;

  constructor(private routerFacade: RouterFacade) {
  }
}
