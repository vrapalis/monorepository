import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilFormUtilService {

  getEmailErrorMessage(form: FormGroup) {
    if (form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (form.get('email')?.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }

  getPasswordErrorMessage(form: FormGroup) {
    if (form.get('password')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (form.get('password')?.hasError('minlength')) {
      return 'Should be min 6 length';
    }

    if (form.get('password')?.hasError('maxlength')) {
      return 'Should be max 12 length';
    }

    return '';
  }

  isPasswordSame(password: string, passwordRepeated: string) {
    return password === passwordRepeated;
  }
}
