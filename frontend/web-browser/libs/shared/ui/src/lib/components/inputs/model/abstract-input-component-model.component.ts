import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputBusinessRules } from '@web-browser/shared/model';

@Component({
  template: ''
})
export class AbstractInputComponent {
  @Input() public control: FormControl;
  @Input() public label: string;
  @Input() public placeHolder = '';
  readonly businessRules = InputBusinessRules;
}
