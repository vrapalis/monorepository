import {NgModule} from '@angular/core';
import {AppRouterModule} from "./app-router.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavigationModule} from "@web/shared/ui";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppRouterModule,
    NavigationModule
  ],
  exports: [
    NavigationModule,
    RouterModule
  ]
})
export class AppCoreModule {
}
