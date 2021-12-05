import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResetPasswordCnComponent } from './containers/reset-password-cn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiFormModule } from '@frontend/shared/ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ResetPasswordCnComponent }
    ]),
    ReactiveFormsModule,
    SharedUiFormModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    ResetPasswordCnComponent
  ],
})
export class FeatureResetPasswordModule {}
