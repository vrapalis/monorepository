import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUiState from './state';
import { NotificationModule } from './components/notification/notification.module';
import { ContainersModule } from './containers/containers.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainersModule,
    StoreModule.forFeature(fromUiState.uiStateFeatureKey, fromUiState.reducers, { metaReducers: fromUiState.metaReducers }),
    NotificationModule
  ],
  exports: [NotificationModule, ContainersModule]
})
export class SharedUiModule {
}
