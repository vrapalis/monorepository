import { Component } from '@angular/core';
import { AbstractInputComponent } from '../model/abstract-input-component-model.component';

@Component({
  selector: 'sh-ui-in-name',
  template: `
    <mat-form-field class='w-100' appearance='standard'>
      <mat-label>{{label}}</mat-label>
      <input autocomplete='username' type='text' class='p-2' matInput #name maxlength='120' [placeholder]='placeHolder'
             [formControl]='control'>
      <mat-hint align='start'>
        <strong>{{label}} should be min {{businessRules.names.min}} maximal {{businessRules.names.max}} characters
        </strong>
      </mat-hint>
      <mat-hint align='end'>{{name.value.length}} / {{businessRules.names.max}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputNameComponent extends AbstractInputComponent {
}
