import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-browser-button',
  template: `
    <button type='button' class='lightTextFn'>{{title}}</button>
  `,
  styles: [`
    button {
      margin-top: 20px;
      width: 80%;
      height: 50px;
      background: linear-gradient(
        161.35deg, #22E14C 9.15%, #0DBD33 71.18%, #07AD2C 92.43%);
      box-shadow: 0px 22px 22px rgb(0 0 0 / 12%);
      border-radius: 40.5px;
      line-height: 20px;
      text-align: center;
      color: #F5F5FB;
      border: unset;
    }
  `]
})
export class EnButtonComponent {
  @Input() title: string;
}
