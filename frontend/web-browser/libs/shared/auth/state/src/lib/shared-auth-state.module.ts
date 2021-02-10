import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuthStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { SharedAuthUtilModule } from '@web-browser/shared/auth/util';
import { SharedAuthDataAccessModule } from '@web-browser/shared/auth/data-access';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuthStore.authStoreFeatureKey, fromAuthStore.reducers, { metaReducers: fromAuthStore.metaReducers }),
    EffectsModule.forFeature([UserEffects]),
    SharedAuthUtilModule,
    SharedAuthDataAccessModule
  ],
})
export class SharedAuthStateModule {
}
