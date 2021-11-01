import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthUser from '../reducers/auth-user.reducer';
import { IAuthUser } from '@frontend/shared/model';

export const selectAuthUserState = createFeatureSelector<IAuthUser>(
  fromAuthUser.authUserFeatureKey
);

export const selectUserId = createSelector(selectAuthUserState, state => state.id);

