import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilForm } from './components/shared-util-form';
import { LayoutUtilService } from './layout/layout-util.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SharedUtilForm, LayoutUtilService]
})
export class SharedUtilModule {
}
