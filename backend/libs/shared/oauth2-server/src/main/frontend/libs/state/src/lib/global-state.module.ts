import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromUser from './user/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/effects/user.effects';
import { StoreModule } from '@ngrx/store';
import * as fromUi from './ui/reducers/ui.reducer';
import { UiEffects } from './ui/effects/ui.effects';
import * as fromClient from './client/reducers/client.reducer';
import { ClientEffects } from './client/effects/client.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forFeature(fromUi.uiFeatureKey, fromUi.reducer),
    StoreModule.forFeature(fromClient.clientFeatureKey, fromClient.clientReducer),

    EffectsModule.forFeature([UserEffects, UiEffects, ClientEffects])
  ]
})
export class GlobalStateModule {
}
