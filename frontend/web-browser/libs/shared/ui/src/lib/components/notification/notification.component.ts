import { Component } from '@angular/core';
import { fadeEnter, fadeLeave, moveFromTopEnter, moveToLeftLeave } from '../../animations/basic.animations';
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { selectNotificationState } from '../../state/notification/notification.selectors';
import { Observable } from 'rxjs';
import { NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';
import { hideNotification } from '../../state/notification/notification.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'sh-ui-notification',
  template: `
    <ng-container *ngIf='(notificationModel$ | async) as notification;'>
      <aside class='nt' [ngClass]='getNotificationType(notification.type)'
             *ngIf='notification.isShown'
             @fadeEnter @fadeLeave @moveFromTopEnter @moveToLeftLeave>
        <div class='nt-header'>
          <h3 class='nt-header-title'>{{notification.title}}</h3>
          <span class='material-icons' (click)='onClose()'>
          close
        </span>
        </div>
        <div class='nt-body'>
          <p>{{notification.text}}</p>
        </div>
      </aside>
    </ng-container>
  `,
  styleUrls: ['./notification.component.scss'],
  animations: [
    fadeEnter('100ms ease-in'),
    fadeLeave('300ms ease-out'),
    moveFromTopEnter('100ms ease-in', '-200px'),
    moveToLeftLeave('300ms ease-out', '-200px')
  ]
})
export class NotificationComponent {
  notificationModel$: Observable<NotificationModel>;

  constructor(private state: Store<State>) {
    this.notificationModel$ = this.state.select(selectNotificationState)
      .pipe(tap(this.onNotificationStateChange));
  }

  onClose() {
    this.state.dispatch(hideNotification());
  }

  getNotificationType(type: NotificationTypeModel | NotificationTypeModel.INFO): string {
    switch (type) {
      case NotificationTypeModel.INFO:
        return 'nt-info';
      case NotificationTypeModel.SUCCESS:
        return 'nt-success';
      case NotificationTypeModel.ERROR:
        return 'nt-error';
      default:
        return 'nt-info';
    }
  }

  onNotificationStateChange = (notification: NotificationModel) => {
    if (notification.dismiss != null) {
      setTimeout(() => {
        this.state.dispatch(hideNotification());
        if (notification.callbackAfterDismiss) {
          notification.callbackAfterDismiss();
        }
      }, notification.dismiss);
    }
  };
}
