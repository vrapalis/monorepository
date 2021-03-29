import { Component, OnDestroy } from '@angular/core';
import { QrCodeModel } from '@web-browser/entryou/model';
import { Store } from '@ngrx/store';
import { CHECK_IN_ACTION, EntryouState } from '@web-browser/entryou/state';
import { UserModel } from '@web-browser/shared/auth/model';
import { Subject } from 'rxjs';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'web-browser-private-container',
  template: `
    <div>
      <web-browser-private (getScannedQrCode)='onQrCodeScan($event)'></web-browser-private>
    </div>
  `,
  styles: []
})
export class PrivateContainerComponent implements OnDestroy {
  private userId: string;
  private unsubscription$ = new Subject<void>();

  constructor(private state: Store<EntryouState>, private authState: Store<UserModel>) {
    this.authState.select(selectAuthUserState)
      .pipe(takeUntil(this.unsubscription$))
      .subscribe(user => {
        if (user.info) {
          this.userId = user.info.id.toString();
        }
      });
  }

  onQrCodeScan(qrCode: QrCodeModel) {
    this.state.dispatch(CHECK_IN_ACTION({
      checkInModel: {
        entryId: qrCode.id,
        guestId: this.userId,
        arriveOn: new Date()
      }
    }));
  }

  ngOnDestroy(): void {
    this.unsubscription$.next();
    this.unsubscription$.complete();
  }
}
