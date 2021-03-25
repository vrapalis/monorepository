import { createReducer, Action } from '@ngrx/store';

export const ENTRYOU_FEATURE_KEY = 'entryou';

export interface EntryouState {
  checkedIn: boolean;
}

export const initialState: EntryouState = {
  checkedIn: false
};

const entryouReducer = createReducer(
  initialState
);

export function reducer(state: EntryouState | undefined, action: Action) {
  return entryouReducer(state, action);
}
