import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiHeaderModule } from './header/shared-ui-header.module';
import { SharedUiNavigationModule } from './navigation/shared-ui-navigation.module';
import { SharedUiNotFoundModule } from './not-found/shared-ui-not-found.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    SharedUiHeaderModule,
    SharedUiNavigationModule,
    SharedUiNotFoundModule
  ]
})
export class SharedUiModule {
}
