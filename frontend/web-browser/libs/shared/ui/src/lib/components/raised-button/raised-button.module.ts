import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [RaisedButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [RaisedButtonComponent]
})
export class RaisedButtonModule {
}
