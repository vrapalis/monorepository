import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectionModel } from '@web-browser/shared/model';
import { SelectionChange } from '@angular/cdk/collections';

@Component({
  selector: 'sh-ui-in-selection',
  template: `
    <mat-form-field class='w-100' appearance='standard'>
      <mat-label>{{selection?.title}}</mat-label>
      <mat-select [formControl]='control' (selectionChange)='onSelectionChanged()'>
        <mat-option [value]='optionKey' *ngFor='let optionKey of selection?.options?.keys()'>
          {{selection.options.get(optionKey)}}
        </mat-option>
      </mat-select>
      <mat-hint align='start'>
        <strong>
          {{matHintStart}}
        </strong>
      </mat-hint>
      <mat-hint align='end'>{{matHintEnd}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputSelectionComponent {
  @Input() control: FormControl;
  @Input() selection = { title: null, options: null } as SelectionModel;
  @Input() matHintStart: string;
  @Input() matHintEnd: string;
  @Output() selectionChanged = new EventEmitter<string>();

  onSelectionChanged() {
    this.selectionChanged.emit(this.control.value);
  }
}
