import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputPasswordComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [InputPasswordComponent]
})
export class InputPasswordModule {
}
