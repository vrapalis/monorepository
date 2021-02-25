export enum NotificationTypeModel {
  SUCCESS = 'SUCCESS', INFO = 'INFO', ERROR = 'ERROR'
}

export interface NotificationModel {
  dismiss: number;
  isShown?: boolean | false;
  type: NotificationTypeModel | NotificationTypeModel.INFO;
  title: string;
  text: string;
  callbackAfterDismiss?: () => void;
}
