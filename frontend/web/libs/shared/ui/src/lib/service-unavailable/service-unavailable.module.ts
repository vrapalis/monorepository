import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceUnavailableComponent} from './components/service-unavailable.component';


@NgModule({
  declarations: [
    ServiceUnavailableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ServiceUnavailableComponent]
})
export class ServiceUnavailableModule {
}
