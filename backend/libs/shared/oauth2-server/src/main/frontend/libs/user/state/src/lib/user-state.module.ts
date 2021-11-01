import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuthUser from './auth-user/reducers/auth-user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthUserEffects } from './auth-user/effects/auth-user.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuthUser.authUserFeatureKey, fromAuthUser.reducer),
    EffectsModule.forFeature([AuthUserEffects])
  ]
})
export class UserStateModule {
}
