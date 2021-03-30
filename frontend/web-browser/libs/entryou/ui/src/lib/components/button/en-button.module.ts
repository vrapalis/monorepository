import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnButtonComponent } from './en-button.component';


@NgModule({
  declarations: [EnButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [EnButtonComponent]
})
export class EnButtonModule {
}
