import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {LanguageService} from "@web/websites/vrapalis/utility";
import {TranslateService} from "@ngx-translate/core";
import {Observable, Subject, takeUntil} from "rxjs";
import {IProjectsPage} from "@web/websites/vrapalis/model";

@Component({
  selector: 'web-projects-container',
  template: `
    <main class="projects-wrapper">
      <ng-container *ngIf="translation.get('projects') | async as projects;">
        <h2 [innerHTML]="projects.title" *ngIf="projects.title.length > 0"></h2>

        <h3 class="vr-section-header" [innerHTML]="projects.backend.title"></h3>
        <div class="projects-area">
          <web-projects-component *ngFor="let project of projects.backend.projects" [project]="project">
          </web-projects-component>
        </div>

        <h3 class="vr-section-header projects-frontend" [innerHTML]="projects.frontend.title"></h3>
        <div class="projects-area">
          <web-projects-component *ngFor="let project of projects.frontend.projects" [project]="project">
          </web-projects-component>
        </div>
      </ng-container>
    </main>
  `,
  styleUrls: ['projects-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  constructor(private languageService: LanguageService, public translation: TranslateService) {
    languageService.lang$.pipe(takeUntil(this.unsubscribe$)).subscribe(lang => translation.use(lang));
    languageService.setDefaultLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
