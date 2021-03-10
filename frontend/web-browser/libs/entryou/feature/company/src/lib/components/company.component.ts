import { ChangeDetectionStrategy, Component, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ECompanyButtonTypeModel } from '../models/button.model';

@Component({
  selector: 'web-browser-company',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-button-toggle-group name='fontStyle' [formControl]='fontStyleControl'>
      <mat-button-toggle [value]='companyBtnModel.QR_CODE'>
        QR Code
      </mat-button-toggle>
      <mat-button-toggle [value]='companyBtnModel.QUESTS'>
        Besucher
      </mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styles: [`
    mat-button-toggle-group {
      width: 80%;
      border-radius: 50px;
    }

    mat-button-toggle {
      width: 50%;
    }

    .mat-button-toggle-checked {
      background-color: rgba(31, 80, 201, 1);
      color: white;
    }

    ::ng-deep .mat-button-toggle-label-content {
      font-family: 'Ubuntu Regular' !important;
    }
  `]
})
export class CompanyComponent implements OnDestroy {
  fontStyleControl = new FormControl(ECompanyButtonTypeModel.QR_CODE);
  companyBtnModel = ECompanyButtonTypeModel;
  private unsubscribe$ = new Subject<string>();
  @Output() toggleEvent = new BehaviorSubject<ECompanyButtonTypeModel>(ECompanyButtonTypeModel.QR_CODE);

  constructor() {
    this.fontStyleControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => this.toggleEvent.next(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
