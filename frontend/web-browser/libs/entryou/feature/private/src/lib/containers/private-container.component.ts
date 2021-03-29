import { Component, OnDestroy } from '@angular/core';
import { PrivateState, QrCodeModel } from '@web-browser/entryou/model';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { Observable, Subject } from 'rxjs';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { takeUntil } from 'rxjs/operators';
import { CHECK_IN_ACTION, CHECK_IN_FROM_LOCAL_STORAGE, getPrivateState } from '@web-browser/entryou/state';

@Component({
  selector: 'web-browser-private-container',
  template: `
    <div>
      <web-browser-private [user]='user' [privateState]='privateState$'
                           (getScannedQrCode)='onQrCodeScan($event)'></web-browser-private>
    </div>
  `,
  styles: []
})
export class PrivateContainerComponent implements OnDestroy {
  user: UserModel;
  privateState$: Observable<PrivateState>;
  private unsubscription$ = new Subject<void>();

  constructor(private state: Store<PrivateState>, private authState: Store<UserModel>) {
    this.authState.select(selectAuthUserState)
      .pipe(takeUntil(this.unsubscription$))
      .subscribe(user => this.user = user);

    this.privateState$ = this.state.select(getPrivateState);
    this.state.dispatch(CHECK_IN_FROM_LOCAL_STORAGE());
  }

  onQrCodeScan(qrCode: QrCodeModel) {
    if (this.user.info) {
      this.state.dispatch(CHECK_IN_ACTION({
        checkInModel: {
          entryId: qrCode.id,
          guestId: this.user.info.id.toString(),
          arriveOn: new Date()
        }
      }));
    }
  }

  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }
}
