import { ServerResponseModel } from '@web-browser/shared/model';
import { UserInfoModel } from '@web-browser/shared/auth/model';

export interface CheckInModel {
  entryId: string;
  guestId: string;
  arriveOn: Date;
  organizationName?: string;
}

export interface CheckInResponseModel extends ServerResponseModel {
  info: UserInfoModel;
  lastCheckIn: CheckInModel;
}
