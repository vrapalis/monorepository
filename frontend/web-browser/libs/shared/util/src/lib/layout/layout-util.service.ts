import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LayoutUtilService {

  constructor(private breakPointObserver: BreakpointObserver) {
  }

  isLayout991MaxWidth = (): Observable<boolean> => {
    return this.breakPointObserver.observe(['(max-width: 1200px)'])
      .pipe(map(result => result.matches));
  };
}
