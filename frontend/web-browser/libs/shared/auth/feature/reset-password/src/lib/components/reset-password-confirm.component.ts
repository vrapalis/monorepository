import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'web-browser-reset-password-confirm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf='form'>
      <form [formGroup]='form'>
        <sh-ui-in-password [control]='newPassword'></sh-ui-in-password>
        <sh-ui-in-password [control]='newPasswordConfirm' label='Confirm Password'>
        </sh-ui-in-password>
        <div class='text-end mt-5'>
          <sh-ui-flat-button type='primary' [disabled]='!isFormValid' (click)='onSubmit()'>Submit</sh-ui-flat-button>
        </div>
      </form>
    </ng-container>
  `,
  styles: []
})
export class ResetPasswordConfirmComponent {
  @Input() form: FormGroup;
  @Input() newPassword: FormControl;
  @Input() newPasswordConfirm: FormControl;
  @Input() isFormValid: boolean;
  @Output() submitNewPasswordEvent = new EventEmitter<void>();

  onSubmit() {
    if (this.isFormValid) {
      this.submitNewPasswordEvent.emit();
    }
  }
}
