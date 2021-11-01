import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiHeaderContainerComponent } from './containers/shared-ui-header-container.component';
import { SharedUiHeaderComponent } from './components/shared-ui-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SharedUiHeaderContainerComponent,
    SharedUiHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [SharedUiHeaderContainerComponent]
})
export class SharedUiHeaderModule {
}
