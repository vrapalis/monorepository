import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-navigation-container',
  template: `
    <frontend-navigation [appName]='appName'>
      <ng-content></ng-content>
    </frontend-navigation>

  `,
  styles: [`

  `]
})
export class NavigationContainerComponent {
  @Input() appName?: string;

  constructor() {
  }

}
