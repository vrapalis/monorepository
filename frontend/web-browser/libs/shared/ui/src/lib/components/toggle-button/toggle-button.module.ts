import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ToggleButtonComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleButtonComponent
  ]
})
export class ToggleButtonModule {
}
