import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormCnComponent } from './containers/login/login-form-cn.component';


@NgModule({
  declarations: [LoginFormCnComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginFormCnComponent]
})
export class SharedUiFormModule {
}
