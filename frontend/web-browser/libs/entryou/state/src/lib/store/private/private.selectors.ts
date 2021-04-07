import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntryouStoreFeatureKey, State } from '../index';
import { ENTRYOU_PRIVATE_FEATURE_KEY } from './private.reducer';

// Lookup the 'Entryou' feature state managed by NgRx
export const getEntryouState = createFeatureSelector<State>(EntryouStoreFeatureKey);

export const getPrivateState = createSelector(
  getEntryouState,
  state => state[ENTRYOU_PRIVATE_FEATURE_KEY]
);

export const getPagedCheckIns = createSelector(
  getPrivateState,
  state => state.checkIns
);
