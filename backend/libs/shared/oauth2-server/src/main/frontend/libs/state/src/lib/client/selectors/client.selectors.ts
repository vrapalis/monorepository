import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClient from '../reducers/client.reducer';

export const selectClientState = createFeatureSelector<fromClient.IClientState>(
  fromClient.clientFeatureKey
);

export const selectClientProviders = createSelector(selectClientState, (state) => state.providers);
