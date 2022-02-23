import {Component, Input} from '@angular/core';

@Component({
  selector: 'web-sh-ui-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  @Input() width = 256;
  @Input() data = '';
}
