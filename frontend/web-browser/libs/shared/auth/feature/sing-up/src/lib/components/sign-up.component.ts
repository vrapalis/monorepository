import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedUtilForm } from '@web-browser/shared/util';

@Component({
  selector: 'web-browser-sign-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]='form'>
      <sh-ui-in-email [control]='email'></sh-ui-in-email>
      <sh-ui-in-password [control]='password'></sh-ui-in-password>
      <sh-ui-in-selection></sh-ui-in-selection>
    </form>
  `,
  styles: []
})
export class SignUpComponent {
  form: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder, private utilForm: SharedUtilForm) {
    this.init();
  }

  private init() {
    this.email = this.utilForm.createEmailControl();
    this.password = this.utilForm.createPasswordControl();

    this.form = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  submitForm() {
  }
}
