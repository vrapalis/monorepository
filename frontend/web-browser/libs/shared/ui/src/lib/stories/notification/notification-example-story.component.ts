import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { showNotification } from '@web-browser/shared/ui';
import { EButtonType, NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';

@Component({
  selector: 'sh-ui-demo-button',
  template: `
    <sh-ui-flat-button [type]='infoType' (click)='onInfoClick()'>Info Notification</sh-ui-flat-button>
    <sh-ui-flat-button [type]='primaryType' (click)='onSuccessClick()' class='margin-left'>Success Notification</sh-ui-flat-button>
    <sh-ui-flat-button [type]='errorType' (click)='onErrorClick()' class='margin-left'>Error Notification</sh-ui-flat-button>
    <sh-ui-notification></sh-ui-notification>
  `,
  styles: [`
    .margin-left {
      margin-left: 20px;
    }
  `]
})
export class NotificationExampleStoryComponent {
  infoType = EButtonType.ACCENT;
  primaryType = EButtonType.PRIMARY;
  errorType = EButtonType.WARN;
  notification = {
    isShown: true,
    type: NotificationTypeModel.INFO,
    dismiss: null,
    text: 'Text',
    title: 'Title'
  } as NotificationModel;

  constructor(private state: Store<State>) {
  }

  onInfoClick() {
    this.dispatchNotification(NotificationTypeModel.INFO);
  }

  onSuccessClick() {
    this.dispatchNotification(NotificationTypeModel.SUCCESS);
  }

  onErrorClick() {
    this.dispatchNotification(NotificationTypeModel.ERROR);
  }

  dispatchNotification(type: NotificationTypeModel) {
    this.state.dispatch(showNotification({
      notification: {
        ...this.notification,
        type
      }
    }));
  }
}
