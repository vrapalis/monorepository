import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './components/users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: UsersComponent}
    ]),
  ],
  declarations: [
    UsersComponent
  ],
})
export class Oauth2FeatureUsersModule {
}
