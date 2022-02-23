import
{Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
import {ActivatedRoute, Router, ActivatedRouteSnapshot, NavigationEnd} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'entryou-group-btn',
  template: `
    <mat-button-toggle-group class="btn-gr-wrapper" (valueChange)="change($event)"
                             *ngIf="buttons.length > 0">
      <mat-button-toggle [value]="button.value" *ngFor="let button of buttons" [routerLink]="button.value"
                         [checked]="button.value === value">
        {{button.name}}
      </mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styleUrls: ['entryou-group-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntryouGroupBtnComponent implements OnDestroy {
  @Input() buttons = new Array<IEntryouButtonsModel>();
  @Output() buttonChangeEvent = new EventEmitter<IEntryouButtonsModel>();
  value: undefined | string;
  private unsubscribe$ = new Subject<void>();

  constructor(router: Router, aRoute: ActivatedRoute) {
    router.events
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.value = aRoute.firstChild?.routeConfig?.path;
        }
      });
  }

  change($event: any) {
    if ($event) {
      const button = this.buttons.find(button => button.value === $event);
      if (button) {
        this.buttonChangeEvent.emit(button);
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
