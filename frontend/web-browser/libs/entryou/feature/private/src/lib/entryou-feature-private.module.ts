import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryouFeaturePrivateRoutingModule } from './entryou-feature-private-routing.module';
import { PrivateContainerComponent } from './containers/private-container.component';
import { PrivateComponent } from './components/private.component';

@NgModule({
  imports: [CommonModule, EntryouFeaturePrivateRoutingModule],
  declarations: [PrivateContainerComponent, PrivateComponent]
})
export class EntryouFeaturePrivateModule {
}
