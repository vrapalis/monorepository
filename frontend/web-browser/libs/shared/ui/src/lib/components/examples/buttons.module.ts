import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StButtonComponent } from './st-button/st-button.component';


@NgModule({
  declarations: [StButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [StButtonComponent]
})
export class ButtonsModule {
}
