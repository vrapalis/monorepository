import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from "@ngrx/router-store";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {environment} from '../../../../../../apps/entryou/ui/src/environments/environment';
import {index} from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      index,
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class EntryouSharedStateModule {
}
