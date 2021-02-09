import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromState from './notification/notification.reducer';
import { NotificationModel } from '@web-browser/shared/model';

export const uiStateFeatureKey = 'ui';

export interface State {
  [fromState.stateNotificationFeatureKey]: NotificationModel;
}

export const reducers: ActionReducerMap<State> = {
  [fromState.stateNotificationFeatureKey]: fromState.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
