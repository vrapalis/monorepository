import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeatureHomeModuleRouting } from './entryou-feature-home.module-routing';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home/home-container.component';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';
import { SharedUiModule } from '@web-browser/shared/ui';
import { SharedAuthGuardModule } from '@web-browser/shared/auth/guard';

@NgModule({
  declarations: [HomeContainerComponent, HomeComponent],
  imports: [
    CommonModule,
    EntryouFeatureHomeModuleRouting,
    SharedAuthStateModule,
    SharedUiModule,
    SharedAuthGuardModule
  ]
})
export class EntryouFeatureHomeModule {
}
