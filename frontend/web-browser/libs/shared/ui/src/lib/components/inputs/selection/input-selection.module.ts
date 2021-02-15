import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectionComponent } from './input-selection.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputSelectionComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [InputSelectionComponent]
})
export class InputSelectionModule {
}
