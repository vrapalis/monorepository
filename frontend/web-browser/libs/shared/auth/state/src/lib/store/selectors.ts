import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authStoreFeatureKey, State } from './index';
import { authFeatureKey } from './reducer';

const selectAuthFeature = createFeatureSelector<State>(authStoreFeatureKey);

export const selectAuth = createSelector(
  selectAuthFeature,
  state => state[authFeatureKey]
);

export const selectAuthUser = createSelector(
  selectAuth,
  authState => authState.user
);
