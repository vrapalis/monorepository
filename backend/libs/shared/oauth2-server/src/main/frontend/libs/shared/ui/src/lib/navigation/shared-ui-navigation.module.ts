import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationContainerComponent } from './containers/navigation-container.component';
import { NavigationComponent } from './components/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedUiHeaderModule } from '../header/shared-ui-header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationContainerComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    SharedUiHeaderModule,
    RouterModule
  ],
  exports: [NavigationContainerComponent]
})
export class SharedUiNavigationModule {
}
