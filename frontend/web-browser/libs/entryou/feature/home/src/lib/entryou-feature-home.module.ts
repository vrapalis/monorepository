import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeatureHomeModuleRouting } from './entryou-feature-home.module-routing';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home/home-container.component';
import { SharedAuthStateModule } from '@web-browser/shared/auth/state';

@NgModule({
  declarations: [HomeContainerComponent, HomeComponent],
  imports: [
    CommonModule,
    EntryouFeatureHomeModuleRouting,
    SharedAuthStateModule
  ]
})
export class EntryouFeatureHomeModule {
}
