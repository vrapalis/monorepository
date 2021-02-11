import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardsService } from './auth-guards.service';
import { NotAuthGuardsService } from './not-auth-guards.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthGuardsService, NotAuthGuardsService]
})
export class SharedAuthGuardModule {
}
