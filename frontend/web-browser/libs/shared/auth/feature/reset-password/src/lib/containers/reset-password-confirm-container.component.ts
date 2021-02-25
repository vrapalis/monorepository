import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedUtilForm } from '@web-browser/shared/util';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ResetPasswordConfirmModel, SignInModel, UserModel } from '@web-browser/shared/auth/model';
import { resetPasswordConfirmAction } from '@web-browser/shared/auth/state';

@Component({
  selector: 'web-browser-reset-password-confirm-container',
  template: `
    <sh-ui-form-container>
      <web-browser-reset-password-confirm
        [form]='form'
        [newPassword]='newPassword'
        [newPasswordConfirm]='newPasswordConfirm'
        [isFormValid]='isFormValid()'
        (submitNewPasswordEvent)='onSubmitEvent()'>
      </web-browser-reset-password-confirm>
    </sh-ui-form-container>
  `,
  styles: []
})
export class ResetPasswordConfirmContainerComponent {
  private confirmId: string;
  form: FormGroup;
  newPassword: FormControl;
  newPasswordConfirm: FormControl;

  constructor(
    private route: ActivatedRoute,
    private fUtil: SharedUtilForm,
    private state: Store<UserModel>) {
    this.route.queryParams.subscribe(params => this.confirmId = params['id']);
    this.init();
  }

  private init() {
    this.newPassword = this.fUtil.createPasswordControl();
    this.newPasswordConfirm = this.fUtil.createPasswordControl();

    this.form = this.fUtil.fb.group({
      newPassword: this.newPassword,
      newPasswordConfirm: this.newPasswordConfirm
    });
  }

  isFormValid() {
    return (this.form.valid) && (this.newPassword.value.normalize() === this.newPasswordConfirm.value.normalize());
  }

  onSubmitEvent() {
    const model = { confirmId: this.confirmId, password: this.newPassword.value } as ResetPasswordConfirmModel;
    this.state.dispatch(resetPasswordConfirmAction({ model }));
  }
}
