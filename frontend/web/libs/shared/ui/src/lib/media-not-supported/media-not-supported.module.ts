import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaNotSupportedComponent} from './components/media-not-supported.component';


@NgModule({
  declarations: [
    MediaNotSupportedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MediaNotSupportedComponent]
})
export class MediaNotSupportedModule {
}
