import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatButtonComponent } from './flat-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FlatButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [FlatButtonComponent]
})
export class FlatButtonModule {
}
