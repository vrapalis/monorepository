import { Component, Input } from '@angular/core';
import { InputBusinessRules } from '@web-browser/shared/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-ui-in-password',
  template: `
    <mat-form-field class='w-100' appearance='standard'>
      <mat-label>{{label}}</mat-label>
      <input autocomplete='current-password' type='password' class='p-2' matInput #password maxlength='256'
             placeholder='Your password' [formControl]='control'>
      <mat-hint align='start'>
        <strong>Password should be min {{businessRules.password.min}} maximal {{businessRules.password.max}} characters
        </strong>
      </mat-hint>
      <mat-hint align='end'>{{password.value.length}} / {{businessRules.password.max}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputPasswordComponent {
  @Input() control: FormControl;
  businessRules = InputBusinessRules;
  @Input() label = 'Password';
}
