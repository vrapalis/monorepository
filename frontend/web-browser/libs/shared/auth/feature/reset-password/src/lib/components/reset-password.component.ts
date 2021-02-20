import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedUtilForm } from '@web-browser/shared/util';
import { Store } from '@ngrx/store';
import { resetPasswordAction } from '@web-browser/shared/auth/state';
import { ResetPasswordModel } from '@web-browser/shared/auth/model';

@Component({
  selector: 'web-browser-reset-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]='form' class='pt-3 pb-5'>
      <sh-ui-in-email [control]='email'></sh-ui-in-email>

      <div class='text-end mt-5'>
        <sh-ui-flat-button class='margin-right' type='primary' [disabled]='!form.valid' (click)='reset()'>
          Reset
        </sh-ui-flat-button>
      </div>
    </form>
  `,
  styles: []
})
export class ResetPasswordComponent {
  form: FormGroup;
  email: FormControl;

  constructor(private authState: Store, private utilForm: SharedUtilForm) {
    this.init();
  }

  private init() {
    this.email = this.utilForm.createEmailControl();
    this.form = this.utilForm.fb.group({
      email: this.email
    });
  }

  reset() {
    if (this.form.valid) {
      const email = this.form.getRawValue() as ResetPasswordModel;
      this.authState.dispatch(resetPasswordAction({ email }));
    }
  }
}
