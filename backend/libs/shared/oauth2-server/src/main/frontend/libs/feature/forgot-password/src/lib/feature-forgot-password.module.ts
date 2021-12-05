import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForgotPasswordCnComponent } from './containers/forgot-password-cn.component';
import { SharedUiFormModule } from '@frontend/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ForgotPasswordCnComponent }
    ]),
    ReactiveFormsModule,
    SharedUiFormModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    ForgotPasswordCnComponent
  ],
})
export class FeatureForgotPasswordModule {}
