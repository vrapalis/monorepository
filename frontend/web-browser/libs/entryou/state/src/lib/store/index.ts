import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as privateFeature from './private/private.reducer';
import { PrivateState } from '@web-browser/entryou/model';

export const EntryouStoreFeatureKey = 'entryou';

export interface State {
  [privateFeature.ENTRYOU_PRIVATE_FEATURE_KEY]: PrivateState
}

export const reducers: ActionReducerMap<State> = {
  [privateFeature.ENTRYOU_PRIVATE_FEATURE_KEY]: privateFeature.privateReducer
};

export const metaReducers: MetaReducer<State>[] = [];
