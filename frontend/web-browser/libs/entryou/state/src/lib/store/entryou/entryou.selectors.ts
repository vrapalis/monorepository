import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ENTRYOU_FEATURE_KEY,
  State,
  EntryouPartialState,
  entryouAdapter,
} from './entryou.reducer';

// Lookup the 'Entryou' feature state managed by NgRx
export const getEntryouState = createFeatureSelector<
  EntryouPartialState,
  State
>(ENTRYOU_FEATURE_KEY);

const { selectAll, selectEntities } = entryouAdapter.getSelectors();

export const getEntryouLoaded = createSelector(
  getEntryouState,
  (state: State) => state.loaded
);

export const getEntryouError = createSelector(
  getEntryouState,
  (state: State) => state.error
);

export const getAllEntryou = createSelector(getEntryouState, (state: State) =>
  selectAll(state)
);

export const getEntryouEntities = createSelector(
  getEntryouState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getEntryouState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getEntryouEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
