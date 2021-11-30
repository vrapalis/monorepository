import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiApplicationCnComponent } from './containers/shared-ui-application-cn.component';
import { SharedUiHeaderModule } from '../header/shared-ui-header.module';
import { SharedUiNavigationModule } from '../navigation/shared-ui-navigation.module';


@NgModule({
  declarations: [
    SharedUiApplicationCnComponent
  ],
  imports: [
    CommonModule,
    SharedUiHeaderModule,
    SharedUiNavigationModule
  ],
  exports: [SharedUiApplicationCnComponent]
})
export class SharedUiApplicationModule {
}
