import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ENTRYOU_FEATURE_KEY,
  EntryouState,
} from './entryou.reducer';

// Lookup the 'Entryou' feature state managed by NgRx
export const getEntryouState = createFeatureSelector<
  EntryouState
>(ENTRYOU_FEATURE_KEY);

export const getEntryouLoaded = createSelector(
  getEntryouState,
  (state: EntryouState) => state
);
