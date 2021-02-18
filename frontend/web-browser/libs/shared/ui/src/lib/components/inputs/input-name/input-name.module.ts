import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNameComponent } from './input-name.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputNameComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [InputNameComponent]
})
export class InputNameModule {
}
