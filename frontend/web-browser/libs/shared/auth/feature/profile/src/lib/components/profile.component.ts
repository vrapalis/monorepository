import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'web-browser-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      profile works!
    </p>
  `,
  styles: []
})
export class ProfileComponent {
}
