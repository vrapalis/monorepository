import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'frontend-navigation-container',
  template: `
    <frontend-navigation [appName]='appName' (loginEvent)='login()'>
      <ng-content></ng-content>
    </frontend-navigation>
  `,
  styles: [`

  `]
})
export class NavigationContainerComponent {
  @Input() appName?: string;
  @Output() loginEvent = new EventEmitter<void>();

  login() {
    this.loginEvent.emit();
  }
}
