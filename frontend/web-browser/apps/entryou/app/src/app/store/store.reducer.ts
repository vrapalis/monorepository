import { Action, createReducer, on } from '@ngrx/store';


export const storeFeatureKey = 'state';

export interface State {
  state: string
}

export const initialState: State = {
  state: 'First state'
};


export const reducer = createReducer(
  initialState,
);

