import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPaginatorComponent } from './basic-paginator.component';


@NgModule({
  declarations: [BasicPaginatorComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicPaginatorComponent]
})
export class BasicPaginatorModule {
}
