import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilSnackService {

  constructor(private snackBar: MatSnackBar) {
  }

  open(title: string, msg: string): Observable<MatSnackBarDismiss> {
    return this.snackBar.open(msg, title, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }).afterDismissed();
  }
}
