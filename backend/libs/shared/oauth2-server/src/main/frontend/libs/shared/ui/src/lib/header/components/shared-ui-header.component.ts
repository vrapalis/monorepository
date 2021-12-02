import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { IAuthUser } from '@frontend/shared/model';

@Component({
  selector: 'frontend-shared-ui-header',
  templateUrl: './shared-ui-header.component.html',
  styleUrls: ['./shared-ui-header.component.scss']
})
export class SharedUiHeaderComponent {
  @Input() drawer?: MatSidenav;
  @Input() appName?: string;
  @Input() authUser?: IAuthUser | null;

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
