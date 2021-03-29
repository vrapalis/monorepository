import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PrivateEffects } from './store/private/private.effects';
import * as fromEntryou from './store/index';
import { EntryouUtilsModule } from '@web-browser/entryou/utils';

@NgModule({
  imports: [
    CommonModule,
    EntryouUtilsModule,
    StoreModule.forFeature(
      fromEntryou.EntryouStoreFeatureKey,
      fromEntryou.reducers,
      {
        metaReducers: fromEntryou.metaReducers
      }
    ),
    EffectsModule.forFeature([PrivateEffects])
  ]
})
export class EntryouStateModule {
}
