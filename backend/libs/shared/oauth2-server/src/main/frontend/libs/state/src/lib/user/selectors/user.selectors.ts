import { createFeatureSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const SELECT_USER_STATE = createFeatureSelector<fromUser.UserState>(
  fromUser.userFeatureKey
);
