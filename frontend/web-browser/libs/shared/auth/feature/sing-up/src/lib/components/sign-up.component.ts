import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedUtilForm } from '@web-browser/shared/util';
import { SelectionModel } from '@web-browser/shared/model';
import { OrganizationType, SignUpModel } from '@web-browser/shared/auth/model';

@Component({
  selector: 'web-browser-sign-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]='form'>
      <sh-ui-in-email [control]='email'></sh-ui-in-email>
      <sh-ui-in-password [control]='password'></sh-ui-in-password>
      <sh-ui-in-selection style='display: block; margin-top: 20px;' [control]='organizationType'
                          [selection]='organizationTypeSelection'
                          matHintStart='Organization type is required'>
      </sh-ui-in-selection>
      <button (click)='submitForm()'>Click</button>
    </form>
  `,
  styles: []
})
export class SignUpComponent {
  form: FormGroup;
  email: FormControl;
  password: FormControl;
  organizationType: FormControl;
  organizationTypeSelection: SelectionModel;

  constructor(private fb: FormBuilder, private utilForm: SharedUtilForm) {
    this.init();
  }

  private init() {
    const options = new Map<OrganizationType, string>();
    options.set('Company', 'Company');
    options.set('Privat', 'Privat');

    this.organizationTypeSelection = {
      title: 'Organization Type',
      options
    };

    this.email = this.utilForm.createEmailControl();
    this.password = this.utilForm.createPasswordControl();
    this.organizationType = this.utilForm.createOrganizationTypeSelectionControl('Privat' as OrganizationType);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      organizationType: this.organizationType
    });
  }

  submitForm() {
    const signUpModel = this.form.getRawValue() as SignUpModel;
    console.log(signUpModel);
  }
}
