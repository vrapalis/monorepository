import
{Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {IEntryouButtonsModel} from "@web/entryou/shared/model";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'entryou-sh-ui-group-btn',
  template: `
    <ng-container *ngIf="show">
      <mat-button-toggle-group class="btn-gr-wrapper" (valueChange)="change($event)"
                               *ngIf="buttons.length > 0">
        <mat-button-toggle [value]="button.value" *ngFor="let button of buttons" [routerLink]="button.value"
                           [checked]="button.value === value">
          {{button.name}}
        </mat-button-toggle>
      </mat-button-toggle-group>
    </ng-container>
  `,
  styleUrls: ['entryou-group-btn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntryouGroupBtnComponent implements OnDestroy {
  @Input() buttons = new Array<IEntryouButtonsModel>();
  @Input() show = true;
  @Input() value = '';
  @Output() buttonChangeEvent = new EventEmitter<IEntryouButtonsModel>();
  private unsubscribe$ = new Subject<void>();

  constructor(router: Router, aRoute: ActivatedRoute) {
    router.events
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.value = aRoute.firstChild?.routeConfig?.path !== undefined ? aRoute.firstChild?.routeConfig?.path : '';
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
