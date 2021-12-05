import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromUser from './user/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/effects/user.effects';
import { StoreModule } from '@ngrx/store';
import * as fromUi from './ui/reducers/ui.reducer';
import { UiEffects } from './ui/effects/ui.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromUi.uiFeatureKey, fromUi.reducer),
    EffectsModule.forFeature([UserEffects, UiEffects]),
  ],
})
export class GlobalStateModule {}
