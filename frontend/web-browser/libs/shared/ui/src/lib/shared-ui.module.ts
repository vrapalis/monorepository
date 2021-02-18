import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUiState from './state';
import { NotificationModule } from './components/notification/notification.module';
import { ContainersModule } from './containers/containers.module';
import { InputEmailModule } from './components/inputs/email/input-email.module';
import { InputPasswordModule } from './components/inputs/password/input-password.module';
import { InputSelectionModule } from './components/inputs/selection/input-selection.module';
import { FlatButtonModule } from './components/flat-button/flat-button.module';
import { InputNameModule } from './components/inputs/input-name/input-name.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainersModule,
    StoreModule.forFeature(fromUiState.uiStateFeatureKey, fromUiState.reducers, { metaReducers: fromUiState.metaReducers }),
    NotificationModule,
  ],
  exports: [
    FlatButtonModule,
    NotificationModule,
    ContainersModule,
    InputEmailModule,
    InputPasswordModule,
    InputSelectionModule,
    InputNameModule
  ]
})
export class SharedUiModule {
}
