import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedUiHeaderComponent} from './components/shared-ui-header.component';


@NgModule({
  declarations: [
    SharedUiHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SharedUiHeaderComponent]
})
export class HeaderModule {
}
