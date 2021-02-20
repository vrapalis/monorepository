import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignInModel } from '@web-browser/shared/auth/model';
import { SharedUtilForm } from '@web-browser/shared/util';

@Component({
  selector: 'web-browser-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form class='form pt-3 pb-5' [formGroup]='form'>
      <sh-ui-in-email [control]='email'></sh-ui-in-email>
      <sh-ui-in-password [control]='password'></sh-ui-in-password>

      <div class='text-end mt-5'>
        <sh-ui-flat-button class='margin-right' type='primary' [disabled]='!form.valid' (click)='onLogin()'>Sign In</sh-ui-flat-button>
        <sh-ui-button type='primary' routerLink='../sign-up'>Sign Up</sh-ui-button>
      </div>
      <div class='text-end mt-2'>
        <sh-ui-button type='accent' routerLink='../reset-password'>Reset Password</sh-ui-button>
      </div>
    </form>
  `,
  styles: [`
    .margin-right {
      margin-right: 5px;
    }
  `]
})
export class SignInComponent {
  form: FormGroup;
  email: FormControl;
  password: FormControl;
  @Output() loginEvent = new EventEmitter<SignInModel>();

  constructor(private fb: FormBuilder, private fUtil: SharedUtilForm) {
    this.initForm();
  }

  private initForm() {
    this.email = this.fUtil.createEmailControl();
    this.password = this.fUtil.createPasswordControl();

    this.form = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  // TODO AFTER DISABLE BUTTON BUG FIX CHECK FORM CAN BE REMOVED
  onLogin() {
    if(this.form.valid) {
      const signInModel = this.form.getRawValue() as SignInModel;
      this.loginEvent.emit(signInModel);
    }
  }
}
