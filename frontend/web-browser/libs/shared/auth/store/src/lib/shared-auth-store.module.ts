import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuthStore from './index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuthStore.authStoreFeatureKey, fromAuthStore.reducers, { metaReducers: fromAuthStore.metaReducers })
  ]
})
export class SharedAuthStoreModule {
}
