import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {getRouterParam} from '@web/shared/utility';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
import {takeUntil} from "rxjs";

@Component({
  selector: 'entryou-entry',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  id$ = this.aRouter.params.pipe(getRouterParam('id'));
  value = ''
  buttons = [
    {name: 'Score', value: 'score'},
    {name: 'Entry', value: 'entry'},
    {name: 'Menu', value: 'menu'},
  ] as Array<IEntryouButtonsModel>;

  constructor(router: Router, private aRouter: ActivatedRoute) {
    router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.value = aRouter.firstChild?.routeConfig?.path !== undefined ? aRouter.firstChild?.routeConfig?.path : '';
        }
      });
  }
}
