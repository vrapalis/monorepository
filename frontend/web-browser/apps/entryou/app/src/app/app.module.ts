import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EntryouUiModule } from '@web-browser/entryou/ui';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedUiModule } from '@web-browser/shared/ui';
import { SharedAuthGuardModule } from '@web-browser/shared/auth/guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EntryouUiModule,
    AppRoutingModule,
      BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedAuthStateModule,
    SharedAuthGuardModule,
    SharedUiModule
  ],
  providers: [
    { provide: 'environment', useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
