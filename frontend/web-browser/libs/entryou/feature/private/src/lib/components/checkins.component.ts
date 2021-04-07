import { Component } from '@angular/core';
import { IPaginationModel } from '@web-browser/shared/model';
import { CheckInModel, ICardModel, PrivateState } from '@web-browser/entryou/model';
import { Store } from '@ngrx/store';
import { GET_PAGED_CHECK_INS_ACTION, getPagedCheckIns } from '@web-browser/entryou/state';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'web-browser-checkins',
  template: `
    <div class='wrapper' *ngIf='paginator$ | async as paginator;'>
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
  paginator$: Observable<IPaginationModel<CheckInModel>>;

  constructor(private privateState: Store<PrivateState>) {
    this.privateState.dispatch(GET_PAGED_CHECK_INS_ACTION({ page: { guestId: 1 } }));
    this.paginator$ = this.privateState.select(getPagedCheckIns)
      .pipe(
        filter(paged => paged !== null),
        tap(this.mapToCard)
      );
  }

  activePageEvent(page: number) {
    this.privateState.dispatch(GET_PAGED_CHECK_INS_ACTION({ page: { guestId: 1, page } }));
  }

  private mapToCard = (paged: IPaginationModel<CheckInModel>): void => {
    this.cards = paged.content.map(checkin => {
      return {
        title: checkin.organizationName,
        time: new Date(checkin.arriveOn).toLocaleString(),
        imgSrc: 'assets/images/tmp-card.svg',
        text: null
      } as ICardModel;
    });
  };
}
