import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';

@Component({
  selector: 'web-browser-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'entryou-app';

  constructor(private store: Store<AppState>) {
  }
}
