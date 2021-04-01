import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'sh-ui-toggle-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='toggleBtnWrapper'>
      <mat-button-toggle-group class='toggleBtn' [formControl]='fControl'>
        <mat-button-toggle class='textBtnFn' [value]='buttonFirstValue'>
          {{buttonFirstText}}
        </mat-button-toggle>
        <mat-button-toggle class='textBtnFn' [value]='buttonSecondValue'>
          {{buttonSecondText}}
        </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  `,
  styleUrls: ['toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnChanges, OnDestroy {
  @Output() valueChangedEvent = new EventEmitter<string>();
  @Input() buttonFirstValue: string;
  @Input() buttonFirstText: string;
  @Input() buttonSecondValue: string;
  @Input() buttonSecondText: string;

  fControl = new FormControl();
  private unsubscribe$ = new Subject<void>();

  constructor() {
    this.fControl
      .valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => this.valueChangedEvent.emit(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['buttonFirstValue'].currentValue) {
      // this.fControl.setValue(this.buttonFirstValue);
      this.fControl.setValue(this.buttonSecondValue);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
