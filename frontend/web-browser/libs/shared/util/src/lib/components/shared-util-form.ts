import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InputBusinessRules } from '@web-browser/shared/model';

@Injectable()
export class SharedUtilForm {
  constructor(public fb: FormBuilder) {
  }

  createEmailControl(): FormControl {
    return this.fb.control('', [
      Validators.required,
      Validators.email,
      Validators.minLength(InputBusinessRules.email.min),
      Validators.maxLength(InputBusinessRules.email.max)
    ]);
  }

  createPasswordControl(): FormControl {
    return this.fb.control('', [
      Validators.required,
      Validators.minLength(InputBusinessRules.email.min),
      Validators.maxLength(InputBusinessRules.email.max)
    ]);
  }

  createOrganizationTypeSelectionControl(option = '') {
    return this.fb.control(option, [
      Validators.required
    ]);
  }

  createNameControl() {
    return this.fb.control('', [
      Validators.required,
      Validators.minLength(InputBusinessRules.names.min),
      Validators.maxLength(InputBusinessRules.names.max)
    ]);
  }
}
