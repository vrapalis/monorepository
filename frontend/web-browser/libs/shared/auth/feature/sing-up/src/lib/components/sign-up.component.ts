import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedUtilForm } from '@web-browser/shared/util';
import { SelectionModel } from '@web-browser/shared/model';
import { OrganizationType, SignUpModel } from '@web-browser/shared/auth/model';
import { Store } from '@ngrx/store';
import { signUpAction } from '@web-browser/shared/auth/state';

@Component({
  selector: 'web-browser-sign-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]='form'>
      <sh-ui-in-email [control]='email'></sh-ui-in-email>
      <sh-ui-in-password [control]='password'></sh-ui-in-password>
      <sh-ui-in-password label='Repeated Password' [control]='passwordRepeated'></sh-ui-in-password>
      <sh-ui-in-name label='Firstname' placeHolder='Your firstname' [control]='firstName'></sh-ui-in-name>
      <sh-ui-in-name label='Surname' placeHolder='Your surname' [control]='surname'></sh-ui-in-name>
      <sh-ui-in-selection style='display: block; margin-top: 20px;' [control]='organizationType'
                          [selection]='organizationTypeSelection'
                          matHintStart='Organization type is required'>
      </sh-ui-in-selection>
      <div class='text-end mt-3'>
        <sh-ui-flat-button type='primary' [disabled]='!isFormValid()' (click)='submitForm()'>
          Sign up
        </sh-ui-flat-button>
      </div>
    </form>
  `,
  styles: []
})
export class SignUpComponent {
  form: FormGroup;
  email: FormControl;
  password: FormControl;
  passwordRepeated: FormControl;
  organizationType: FormControl;
  firstName: FormControl;
  surname: FormControl;
  organizationTypeSelection: SelectionModel;

  constructor(private fb: FormBuilder,
              private utilForm: SharedUtilForm,
              private state: Store) {
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
    this.firstName = this.utilForm.createNameControl();
    this.surname = this.utilForm.createNameControl();
    this.passwordRepeated = this.utilForm.createPasswordControl();
    this.organizationType = this.utilForm.createOrganizationTypeSelectionControl('Privat' as OrganizationType);

    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      passwordRepeated: this.passwordRepeated,
      firstName: this.firstName,
      surname: this.surname,
      organizationType: this.organizationType
    });
  }

  submitForm() {
    const signUpModel = this.form.getRawValue() as SignUpModel;
    this.state.dispatch(signUpAction({ signUpModel }));
  }

  isFormValid() {
    const signUpModel = this.form.getRawValue();
    const isPasswordTheSame = signUpModel.password.normalize() === signUpModel.passwordRepeated.normalize();
    return isPasswordTheSame && this.form.valid;
  }
}
