import {Component, Inject, Input, OnDestroy} from '@angular/core';
import {IMore} from "@web/websites/vrapalis/model";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IBaseEnv} from "@web/websites/shared/model";

@Component({
  selector: 'web-vr-more',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnDestroy {
  @Input() services = new Array<IMore>();
  isMobile = false;
  private destroyed$ = new Subject<void>();

  constructor(breakpointObserver: BreakpointObserver, @Inject(VR_ENV_IN_TOKEN) public env: IBaseEnv) {
    breakpointObserver.observe('(max-width: 900px)')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(match => this.isMobile = match.matches)
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
