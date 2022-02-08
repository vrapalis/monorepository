import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppCoreModule} from "./app-core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCoreModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
