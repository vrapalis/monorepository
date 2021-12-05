import { Action, createReducer, on } from '@ngrx/store';
import * as UiActions from '../actions/ui.actions';

export const uiFeatureKey = 'ui';

export interface State {
  alert: {
    msg: string | null,
    isShown: boolean | false
  };
}

export const initialState: State = {
  alert: {
    msg: null,
    isShown: false
  }
};

export const reducer = createReducer(
  initialState,

  on(UiActions.loadUis, state => state)
);
