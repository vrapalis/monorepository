import { createAction, props } from '@ngrx/store';
import { EntryouEntity } from './entryou.models';

export const init = createAction('[Entryou Page] Init');

export const loadEntryouSuccess = createAction(
  '[Entryou/API] Load Entryou Success',
  props<{ entryou: EntryouEntity[] }>()
);

export const loadEntryouFailure = createAction(
  '[Entryou/API] Load Entryou Failure',
  props<{ error: any }>()
);
