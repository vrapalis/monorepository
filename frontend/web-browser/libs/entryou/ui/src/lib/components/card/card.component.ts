import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICardModel } from '@web-browser/entryou/model';

@Component({
  selector: 'web-browser-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='row align-items-center mt-2' *ngIf='card'>
      <div class='col-auto'>
        <img [src]='card.imgSrc' alt='card image'>
      </div>
      <div class='col lightTextFn'>
        <h4 class='cardTitle'>{{card.title}}</h4>
        <p class='cardText'>{{card.text}}</p>
        <p class='cardTime'>{{card.time}}</p>
      </div>
    </div>
  `,
  styles: [`
    .row {
      background-color: white;
      padding: 5px;
      box-shadow: 0 22px 22px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }

    .col {
      text-align: left;
    }

    .cardTitle, .cardTime {
      margin-bottom: 2px;
    }

    .cardText {
      margin-bottom: 3px;
    }

    .cardTime {
    }
  `]
})
export class CardComponent {
  @Input() card: ICardModel;
}
