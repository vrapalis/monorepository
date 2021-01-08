import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStore from './store.reducer';


export interface AppState {
  [fromStore.storeFeatureKey]: fromStore.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromStore.storeFeatureKey]: fromStore.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
