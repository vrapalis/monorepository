import
{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiNotFoundModule } from './not-found/shared-ui-not-found.module';
import { SharedUiApplicationModule } from './application/shared-ui-application.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    SharedUiApplicationModule,
    SharedUiNotFoundModule
  ],
  declarations: [
  ]
})
export class SharedUiModule {
}
