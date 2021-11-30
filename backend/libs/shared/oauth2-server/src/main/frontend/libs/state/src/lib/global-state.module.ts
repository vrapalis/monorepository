import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromUser from './user/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/effects/user.effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class GlobalStateModule {}
