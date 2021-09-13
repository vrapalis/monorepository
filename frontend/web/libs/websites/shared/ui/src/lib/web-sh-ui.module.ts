import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebShUiNavbarModule } from './navbar/web-sh-ui-navbar.module';

@NgModule({
  imports: [CommonModule],
  exports: [WebShUiNavbarModule]
})
export class WebShUiModule {
}
