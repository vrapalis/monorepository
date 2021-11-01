import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthUser } from '@frontend/shared/model';
import { loadAuthUsers } from '@frontend/user/state';

@Component({
  selector: 'frontend-home',
  template: `
    <p>
      home works!
    </p>
    <button (click)='click()'>Load</button>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<IAuthUser>) { }

  ngOnInit(): void {
  }

  click() {
    this.store.dispatch(loadAuthUsers({authUser: {id: 'some id', email: 'some email', name: 'some name'}}));
  }
}
