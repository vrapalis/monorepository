import * as fromRouter from "@ngrx/router-store";
import {State} from "../reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const ROUTER_SELECTOR = createFeatureSelector<State, fromRouter.RouterReducerState>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(ROUTER_SELECTOR);

