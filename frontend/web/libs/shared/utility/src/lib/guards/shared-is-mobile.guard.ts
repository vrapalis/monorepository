import {Injectable} from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment
} from "@angular/router";
import {Observable, of, take, tap} from "rxjs";
import {MediaMatcher} from "@angular/cdk/layout";

/*
* Is media match max width of 1024px
*/
@Injectable({providedIn: "root"})
export class SharedIsMobileGuard implements CanLoad {

  constructor(private mediaMatcher: MediaMatcher, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return of(this.mediaMatcher.matchMedia('(max-width: 1024px)').matches)
      .pipe(
        take(1),
        tap(match => {
          if (!match) {
            this.router.navigate(['/media-not-supported'])
          } else {

          }
        })
      );
  }
}
