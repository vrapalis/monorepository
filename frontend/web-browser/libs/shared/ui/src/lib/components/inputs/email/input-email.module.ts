import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputEmailComponent } from './input-email.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InputEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [InputEmailComponent]
})
export class InputEmailModule {
}
