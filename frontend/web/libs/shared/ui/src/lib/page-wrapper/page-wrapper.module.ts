import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageWrapperComponent} from './components/page-wrapper.component';


@NgModule({
  declarations: [
    PageWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageWrapperComponent]
})
export class PageWrapperModule {
}
