import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfilesContainerComponent } from './containers/user-profiles-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: UserProfilesContainerComponent}
    ]),
  ],
  declarations: [
    UserProfilesContainerComponent
  ]
})
export class UserFeaturesProfileModule {
}
