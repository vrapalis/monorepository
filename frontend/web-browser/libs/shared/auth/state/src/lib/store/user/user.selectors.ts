import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authStoreFeatureKey, State } from '../index';
import { authUserFeatureKey } from './user.reducer';

const selectAuthFeature = createFeatureSelector<State>(authStoreFeatureKey);

export const selectAuthUserState = createSelector(
  selectAuthFeature,
  state => state[authUserFeatureKey]
);
