import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEntryou from './store/entryou/entryou.reducer';
import { EntryouEffects } from './store/entryou/entryou.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEntryou.ENTRYOU_FEATURE_KEY,
      fromEntryou.reducer
    ),
    EffectsModule.forFeature([EntryouEffects]),
  ],
})
export class EntryouStateModule {}
