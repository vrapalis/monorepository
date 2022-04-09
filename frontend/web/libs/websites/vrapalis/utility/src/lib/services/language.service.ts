import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  private _lang$ = new Subject<string>();
  lang$ = this._lang$.asObservable();

  constructor(private translate: TranslateService) {
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    const browserLanguage = navigator.language.split('-')[0];
    switch (browserLanguage) {
      case 'de':
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        this._lang$.next('de');
        break;
      case 'ru':
        this.translate.setDefaultLang('ru');
        this.translate.use('ru');
        this._lang$.next('ru');
        break;
      default:
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this._lang$.next('en');
        break;
    }
  }

  updateLanguage(lang: string): void {
    this._lang$.next(lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  use(language: string): void {
    this.translate.use(language).subscribe((_) => {
      this.updateLanguage(language);
    });
  }
}
