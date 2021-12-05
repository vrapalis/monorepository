import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from '../reducers/ui.reducer';

export const selectUiState = createFeatureSelector<fromUi.State>(
  fromUi.uiFeatureKey
);
