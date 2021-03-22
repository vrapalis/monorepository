import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EntryouActions from './entryou.actions';
import { EntryouEntity } from './entryou.models';

export const ENTRYOU_FEATURE_KEY = 'entryou';

export interface State extends EntityState<EntryouEntity> {
  selectedId?: string | number; // which Entryou record has been selected
  loaded: boolean; // has the Entryou list been loaded
  error?: string | null; // last known error (if any)
}

export interface EntryouPartialState {
  readonly [ENTRYOU_FEATURE_KEY]: State;
}

export const entryouAdapter: EntityAdapter<EntryouEntity> = createEntityAdapter<EntryouEntity>();

export const initialState: State = entryouAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const entryouReducer = createReducer(
  initialState,
  on(EntryouActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EntryouActions.loadEntryouSuccess, (state, { entryou }) =>
    entryouAdapter.setAll(entryou, { ...state, loaded: true })
  ),
  on(EntryouActions.loadEntryouFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return entryouReducer(state, action);
}
