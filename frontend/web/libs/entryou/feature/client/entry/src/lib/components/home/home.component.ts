import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {getRouterParam} from '@web/shared/utility';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
import {Subject, takeUntil, tap} from "rxjs";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ClientFacade} from "@web/entryou/shared/state";

@Component({
  selector: 'entryou-entry',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  value = ''
  buttons = [
    {name: 'Score', value: 'score'},
    {name: 'Entry', value: 'entry'},
    {name: 'Menu', value: 'menu'},
  ] as Array<IEntryouButtonsModel>;
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router, private aRouter: ActivatedRoute, private clientFacade: ClientFacade) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.value = this.aRouter.firstChild?.routeConfig?.path !== undefined ? this.aRouter.firstChild?.routeConfig?.path : '';
        }
      });

    this.aRouter.params.pipe(
      getRouterParam('id'),
      tap(id => this.clientFacade.getClientIdAction(id)),
      takeUntil(this.unsubscribe$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
