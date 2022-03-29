import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "../reducers/user.reducer";
import {State} from "../reducers/reducers";

export const USER_SELECTOR = createFeatureSelector<State, UserState>('user');
