import { Component } from '@angular/core';

@Component({
  selector: 'web-sh-ui-contact-side-link-component',
  template: `
    <div class='wrapper'>
      <i class='item bi-github' role="img" aria-label="GitHub"></i>
      <i class='item bi-linkedin' role="img" aria-label="GitHub"></i>
      <i class='item bi-facebook' role="img" aria-label="GitHub"></i>
      <i class='item bi-youtube' role="img" aria-label="GitHub"></i>
    </div>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      align-content: space-between;
      position: fixed;
      left: 0px;
      top: 50%;
      transform: translate(0, -50%);
      width: 100px;
      height: 400px;
    }

    .item {
      margin: 8px;
      height: 50px;
      font-size: xxx-large;
      width: 50px;
    }
  `]
})
export class ContactSideLinkComponent {
}
