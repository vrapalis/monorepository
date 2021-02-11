import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { Observable } from 'rxjs';
import { NotificationModel, NotificationTypeModel } from '@web-browser/shared/model';
import { filter, tap } from 'rxjs/operators';
import { showNotification } from '@web-browser/shared/ui';

@Component({
  selector: 'web-browser-home-container',
  template: `
    <ng-container *ngIf='(user$ | async) as user;'>
      <web-browser-home-component></web-browser-home-component>
    </ng-container>
  `,
  styles: []
})
export class HomeContainerComponent {
  user$: Observable<UserModel>;

  constructor(private authState: Store<UserModel>, private uiState: Store<NotificationModel>) {
    this.user$ = this.authState.select(selectAuthUserState)
      .pipe(
        filter(user => user.email != null),
        tap(user => uiState.dispatch(showNotification({
          notification: {
            type: NotificationTypeModel.INFO,
            dismiss: 2500,
            isShown: true,
            title: 'Welcome',
            text: `You are logged with ${user.email} user`
          }
        })))
      );
  }

}
