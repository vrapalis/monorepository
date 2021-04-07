import { UserInfoModel } from '@web-browser/shared/auth/model';
import { CheckInModel } from './check-in.model';
import { IPaginationModel } from '@web-browser/shared/model';

export interface PrivateState {
  checkedIn: boolean;
  info: UserInfoModel;
  lastCheckIn: CheckInModel;
  checkIns?: IPaginationModel<CheckInModel>;
}
