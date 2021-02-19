import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { signUpConfirmAction } from '@web-browser/shared/auth/state';

@Component({
  selector: 'web-browser-sign-up-confirm',
  template: `
  `,
  styles: []
})
export class SignUpConfirmComponent {

  constructor(private route: ActivatedRoute, private authState: Store) {
    this.route.queryParams.subscribe(params => {
      authState.dispatch(signUpConfirmAction({ id: params['id'] }));
    });
  }
}
