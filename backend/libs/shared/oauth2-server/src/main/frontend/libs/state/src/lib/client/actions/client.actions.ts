import { createAction, props } from '@ngrx/store';
import { IClientProvider } from '@frontend/shared/model';

export const LOAD_CLIENT_PROVIDERS_ACTION = createAction(
  '[Login Component] Load client providers'
);

export const LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION = createAction(
  '[Client Effect] Load client providers success',
  props<{ provider: Array<IClientProvider> }>()
);

export const LOAD_CLIENT_PROVIDERS_ERROR_ACTION = createAction(
  '[Client Effect] Load client providers error',
  props<{ error: Error }>()
);
