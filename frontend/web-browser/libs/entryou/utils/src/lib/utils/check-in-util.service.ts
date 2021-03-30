import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrivateState } from '@web-browser/entryou/model';

@Injectable()
export class CheckInUtilService {
  public static readonly ENTRYOU_PRIVATE_LOCALSTORAGE_KEY = 'entryou/private';

  savePrivateStateToLocalStorage(privateState: PrivateState): Observable<void> {
    return of(localStorage.setItem(CheckInUtilService.ENTRYOU_PRIVATE_LOCALSTORAGE_KEY, JSON.stringify(privateState)));
  }

  readPrivateStateFromLocalStorage(): Observable<PrivateState> {
    const privateState = localStorage.getItem(CheckInUtilService.ENTRYOU_PRIVATE_LOCALSTORAGE_KEY);
    if (privateState !== null) {
      const state = JSON.parse(privateState) as PrivateState;
      return of(state);
    }
    return of(null);
  }
}
