import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuthStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuthStore.authStoreFeatureKey, fromAuthStore.reducers, { metaReducers: fromAuthStore.metaReducers }),
    EffectsModule.forFeature([Effects])
  ]
})
export class SharedAuthStateModule {
}
