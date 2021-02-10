import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUiState from './state';
import { NotificationModule } from './components/notification/notification.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUiState.uiStateFeatureKey, fromUiState.reducers, { metaReducers: fromUiState.metaReducers }),
    NotificationModule
  ],
  exports: [NotificationModule]
})
export class SharedUiModule {
}
