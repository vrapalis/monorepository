import { createAction, props } from '@ngrx/store';
import { NotificationModel } from '@web-browser/shared/model';

export const showNotification = createAction(
  '[UI Actions] Show Notification',
  props<{ notification: NotificationModel }>()
);

export const hideNotification = createAction(
  '[UI Action] Hide Notification'
);
