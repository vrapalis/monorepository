import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClientsComponent} from './components/clients.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ClientsComponent}
    ]),
  ],
  declarations: [
    ClientsComponent
  ],
})
export class Oauth2FeatureClientsModule {
}
