import { Component, OnDestroy } from '@angular/core';
import { CheckInModel, PrivateState, QrCodeModel } from '@web-browser/entryou/model';
import { Store } from '@ngrx/store';
import { UserModel } from '@web-browser/shared/auth/model';
import { Observable, Subject } from 'rxjs';
import { selectAuthUserState } from '@web-browser/shared/auth/state';
import { takeUntil, tap } from 'rxjs/operators';
import {
  CHECK_IN_ACTION,
  CHECK_IN_FROM_LOCAL_STORAGE,
  CHECK_OUT_ACTION,
  getPrivateState
} from '@web-browser/entryou/state';

@Component({
  selector: 'web-browser-private-container',
  template: `
    <div class='wrapper'>
      <div class='btnGroup'>
        <sh-ui-toggle-button buttonFirstText='QR-Scanner' buttonFirstValue='qr-scanner'
                             buttonSecondText='Checkins' buttonSecondValue='checkins'
                             (valueChangedEvent)='toggleButton($event)'>
        </sh-ui-toggle-button>
      </div>

      <div class='compWrapper'>
        <web-browser-private-qr-scanner [user]='user' [privateState]='privateState$'
                                        (getScannedQrCode)='onQrCodeScan($event)'
                                        (checkOutEvent)='onCheckOutEvent()' *ngIf='qrScanner; else checkins'>
        </web-browser-private-qr-scanner>
        <ng-template #checkins>
          <web-browser-checkins></web-browser-checkins>
        </ng-template>
      </div>

    </div>
  `,
  styleUrls: ['private.container.component.scss']
})
export class PrivateContainerComponent implements OnDestroy {
  user: UserModel;
  lastCheckIn: CheckInModel;
  privateState$: Observable<PrivateState>;
  private unsubscription$ = new Subject<void>();
  qrScanner: boolean;

  constructor(private state: Store<PrivateState>, private authState: Store<UserModel>) {
    this.authState.select(selectAuthUserState)
      .pipe(takeUntil(this.unsubscription$))
      .subscribe(user => this.user = user);

    this.privateState$ = this.state.select(getPrivateState)
      .pipe(
        tap(privateState => this.lastCheckIn = privateState.lastCheckIn)
      );
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

  onCheckOutEvent() {
    this.state.dispatch(CHECK_OUT_ACTION({
      checkIn: {
        arriveOn: this.lastCheckIn.arriveOn,
        guestId: this.lastCheckIn.guestId,
        entryId: this.lastCheckIn.entryId
      }
    }));
  }

  toggleButton(value: string) {
    this.qrScanner = value === 'qr-scanner' ? true : false;
  }
}
