import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-browser-head-and-sub-title',
  template: `
    <div class='headAndSubContainer'>
      <h1 class='headerFn'>
        {{header}}
      </h1>
      <h2 class='subHeaderFn'>
        {{subHeader}}
      </h2>
    </div>
  `,
  styles: [`
    .headAndSubContainer {
      text-align: left;
    }

    .headerFn {
      width: 50%;
      margin-bottom: unset !important;
    }
  `]
})
export class HeadAndSubTitleComponent {
  @Input() header: string;
  @Input() subHeader: string;
}
