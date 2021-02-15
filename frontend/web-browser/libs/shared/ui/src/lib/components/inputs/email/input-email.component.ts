import { Component, Input } from '@angular/core';
import { InputBusinessRules } from '@web-browser/shared/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sh-ui-in-email',
  template: `
    <mat-form-field class='w-100' appearance="outline">
      <mat-label>Email</mat-label>
      <input type='email' class='p-2' matInput #email maxlength='120' placeholder='Your email address' [formControl]='control'>
      <mat-hint align='start'>
        <strong>Email address should be min {{businessRules.email.min}} maximal {{businessRules.email.max}} characters
        </strong>
      </mat-hint>
      <mat-hint align='end'>{{email.value.length}} / {{businessRules.email.max}}</mat-hint>
    </mat-form-field>
  `,
  styles: []
})
export class InputEmailComponent {
  @Input() control: FormControl;
  businessRules = InputBusinessRules;
}
