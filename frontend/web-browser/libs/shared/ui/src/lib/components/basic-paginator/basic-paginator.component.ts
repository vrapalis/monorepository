import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPaginationModel } from '@web-browser/shared/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'sh-ui-basic-paginator',
  template: `
    <nav aria-label='Page navigation' *ngIf='pageable'>
      <ul class='pagination justify-content-center' [class.pagination-lg]='isLargeView'>
        <li class='page-item' [class.disabled]='pageable.first'>
          <a class='page-link' aria-label='Previous' (click)='previous()'>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        <li class='page-item' [class.active]='(activePage == i)'
            *ngFor='let pageNum of [].constructor(pageable.totalPages); let i = index'>
          <a class='page-link' (click)='onLinkClick(i)'>{{i + 1}}</a>
        </li>
        <li class='page-item' [class.disabled]='pageable.last'>
          <a class='page-link' aria-label='Next' (click)='next()'>
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      margin: auto;
    }
  `]
})
export class BasicPaginatorComponent {
  @Input() isLargeView = true;
  @Input() pageable: IPaginationModel<any>;
  @Output() activePageEvent = new EventEmitter<number>();
  activePage = 0;

  onLinkClick(pageNumber: number) {
    this.activePage = pageNumber;
    this.activePageEvent.emit(this.activePage);
  }

  previous() {
    if (!this.pageable.first && this.activePage > 0) {
      this.activePage--;
      this.activePageEvent.emit(this.activePage);
    }
  }

  next() {
    if (!this.pageable.last && this.activePage < this.pageable.totalPages) {
      this.activePage++;
      this.activePageEvent.emit(this.activePage);
    }
  }
}
