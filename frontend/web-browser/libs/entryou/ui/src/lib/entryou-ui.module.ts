import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NavbarContainerComponent } from './containers/navbar/navbar-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SharedUtilModule } from '@web-browser/shared/util';
import { LogoModule } from '@web-browser/shared/ui';
import { HeadAndSubTitleComponent } from './components/head-and-sub-title/head-and-sub-title.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    SharedUtilModule,
    LogoModule
  ],
  declarations: [NavbarComponent, NavbarContainerComponent, HeadAndSubTitleComponent],
  exports: [NavbarContainerComponent, HeadAndSubTitleComponent]
})
export class EntryouUiModule {
}
