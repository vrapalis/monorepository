import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebShUiNavbarContainerComponent } from './containers/web-sh-ui-navbar-container.component';
import { WebShUiNavbarComponent } from './components/web-sh-ui-navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WebShUiNavbarContainerComponent,
    WebShUiNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WebShUiNavbarContainerComponent]
})
export class WebShUiNavbarModule {
}
