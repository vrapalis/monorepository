import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-ui-logo',
  template: `
    <div class='logoContainer'>
      <img [src]='imgSrc' alt='logo image'>
      <h4 class='logoFn'>{{title}}</h4>
    </div>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() imgSrc: string;
  @Input() title: string;
}
