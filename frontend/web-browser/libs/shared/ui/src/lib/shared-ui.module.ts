import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUiState from './state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUiState.uiStateFeatureKey, fromUiState.reducers, { metaReducers: fromUiState.metaReducers })
  ],
  exports: []
})
export class SharedUiModule {
}
