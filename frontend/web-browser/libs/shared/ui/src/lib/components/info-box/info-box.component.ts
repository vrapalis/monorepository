import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sh-ui-info-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='container' *ngIf='imgSrc && text'>
      <div class='row'>
        <div class='col'>
          <img [src]='imgSrc'>
        </div>
        <div class='info-text col-8 lightTextFn'>
          <p>{{text}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 15px 10px;
      background-color: white;
    }

    .info-text {
      text-align: left;
    }

    img {
      width: 80px;
      height: 80px;
    }

    .lightTextFn {
      position: relative;
    }

    p {
      position: relative;
      left: -20px;
    }
  `]
})
export class InfoBoxComponent {
  @Input() text: string;
  @Input() imgSrc: string;
}
