import { createReducer, on } from '@ngrx/store';
import { NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';
import { hideNotification, showNotification } from './notification.actions';


export const stateNotificationFeatureKey = 'notification';

export const initialState: NotificationModel = {
  isShown: false,
  type: NotificationTypeModel.INFO,
  title: '',
  text: ''
};


export const reducer = createReducer(
  initialState,

  on(showNotification, (state, action) => {
    return {
      ...state,
      isShown: true,
      type: action.notification.type,
      title: action.notification.title,
      text: action.notification.text
    };
  }),

  on(hideNotification, (state, action) => {
    return initialState;
  })
);

