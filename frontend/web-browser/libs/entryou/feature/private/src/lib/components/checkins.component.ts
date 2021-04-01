import { Component } from '@angular/core';
import { IPaginationModel } from '@web-browser/shared/model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'web-browser-checkins',
  template: `
    <div class='wrapper'>
      <web-browser-card *ngFor='let card of cards' [card]='card'></web-browser-card>
      <div class='paging'>
        <sh-ui-basic-paginator [pageable]='paginator' (activePageEvent)='activePageEvent($event)'>
        </sh-ui-basic-paginator>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      padding: 0px 20px;
      height: 100vh;
    }

    .paging {
      position: absolute;
      bottom: 30px;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%);
    }
  `]
})
export class CheckinsComponent {
  cards = [];
  paginator : IPaginationModel<any>;

  constructor(private http: HttpClient) {
    this.http.get<IPaginationModel<any>>('http://localhost:8083/api/check-ins/guests/1?page=0&size=2', {observe: 'body'})
      .subscribe(value => this.paginator = value);

    this.cards.push(
      { title: 'Card 1', text: 'Card text ...', imgSrc: 'assets/images/tmp-card.svg', time: '22.10.2020 11:11 Uhr' },
      { title: 'Card 2', text: 'Card text ...', imgSrc: 'assets/images/tmp-card.svg', time: '22.10.2020 11:11 Uhr' }
    );
  }

  activePageEvent(page: number) {
    this.http.get<IPaginationModel<any>>(`http://localhost:8083/api/check-ins/guests/1?page=${page}&size=2`, {observe: 'body'})
      .subscribe(value => this.paginator = value);
  }
}
