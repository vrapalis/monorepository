import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtService } from './services/jwt.service';

@NgModule({
  imports: [CommonModule],
  providers: [JwtService]
})
export class SharedAuthUtilModule {}
