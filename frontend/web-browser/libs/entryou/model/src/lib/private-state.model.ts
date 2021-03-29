import { UserInfoModel } from '@web-browser/shared/auth/model';
import { CheckInModel } from './check-in.model';

export interface PrivateState {
  checkedIn: boolean;
  info: UserInfoModel;
  lastCheckIn: CheckInModel;
}
