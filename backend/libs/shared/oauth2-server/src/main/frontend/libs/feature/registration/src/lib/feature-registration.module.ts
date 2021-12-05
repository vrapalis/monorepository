import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationCnComponent } from './containers/registration-cn.component';
import { SharedUiFormModule } from '@frontend/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedUiFormModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RegistrationCnComponent }
    ]),
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    RegistrationCnComponent
  ]
})
export class FeatureRegistrationModule {
}
