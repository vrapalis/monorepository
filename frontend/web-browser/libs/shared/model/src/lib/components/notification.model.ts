export enum NotificationTypeModel {
  SUCCESS = 'SUCCESS', INFO = 'INFO', ERROR = 'ERROR'
}

export interface NotificationModel {
  isShown: boolean | false;
  type: NotificationTypeModel | NotificationTypeModel.INFO;
  title: string;
  text: string;
}
