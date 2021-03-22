import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as EntryouFeature from './entryou.reducer';
import * as EntryouActions from './entryou.actions';

@Injectable()
export class EntryouEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EntryouActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return EntryouActions.loadEntryouSuccess({ entryou: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return EntryouActions.loadEntryouFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
