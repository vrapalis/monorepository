import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, uiStateFeatureKey } from '../index';
import { stateNotificationFeatureKey } from './notification.reducer';

const selectUiStateFeature = createFeatureSelector<State>(uiStateFeatureKey);

export const selectNotificationState = createSelector(
  selectUiStateFeature,
  state => state[stateNotificationFeatureKey]
);

