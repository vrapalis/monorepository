import { Component } from '@angular/core';

@Component({
  selector: 'sh-ui-in-selection',
  template: `
    <mat-form-field class='w-100' appearance="outline">
      <mat-label>Select</mat-label>
      <mat-select>
        <mat-option value="one">First option</mat-option>
        <mat-option value="two">Second option</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: []
})
export class InputSelectionComponent {
}
