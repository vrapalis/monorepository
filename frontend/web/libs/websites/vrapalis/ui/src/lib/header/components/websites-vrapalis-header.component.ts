import {AfterViewInit, Component, HostListener, Inject, PLATFORM_ID, Renderer2} from '@angular/core';
import {isPlatformBrowser, isPlatformServer, DOCUMENT} from "@angular/common";
import {BreakpointObserver} from "@angular/cdk/layout";
import {LanguageService} from "@web/websites/vrapalis/utility";

@Component({
  selector: 'web-vr-header-component',
  templateUrl: 'websites-vrapalis-header.component.html',
  styleUrls: ['websites-vrapalis-header.component.scss']
})
export class WebsitesVrapalisHeaderComponent implements AfterViewInit {
  private isToggled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: Document,
              private breakpointObserver: BreakpointObserver,
              private languageService: LanguageService) {
  }

  ngAfterViewInit(): void {
    // run main initialisation code
    if (isPlatformBrowser(this.platformId)) {
    }
    // OR the alternative
    if (isPlatformServer(this.platformId)) {
      // run server side code
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.document.body.scrollTop > 50 || this.document.documentElement.scrollTop > 50) {
        this.document.getElementById('header')?.classList.add('navbar-scrolled');
        this.document.getElementById('navbar')?.classList.add('navbar-scrolled-shrink');
      } else {
        this.document.getElementById('header')?.classList.remove('navbar-scrolled');
        this.document.getElementById('navbar')?.classList.remove('navbar-scrolled-shrink');
      }
    }
  }

  toggleNavbar() {
    if (isPlatformBrowser(this.platformId)) {
      this.isToggled = !this.isToggled;

      this.document.getElementById('navbar')?.classList.toggle('menu-open');
      this.document.getElementsByTagName('label')[0]?.classList.toggle('wh-cl');
      this.document.getElementsByClassName('ham-menu')[0]?.classList.toggle('ham-menu-cl')
      this.document.getElementsByClassName('ham-menu')[0]?.classList.toggle('ham-menu-bf')
      this.document.getElementsByClassName('ham-menu')[0]?.classList.toggle('ham-menu-af')

      if (this.isToggled) {
        this.document.body.style.overflow = "hidden";
      } else {
        this.document.body.style.overflow = "auto";
      }
    }
  }

  closeMobileMenu() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.breakpointObserver.isMatched('(max-width: 992px)')) {
        this.toggleNavbar();
      }
    }
  }

  openTranslationMenu() {
    const trElement = this.document.getElementById('translation-wr');
    const isToggle = trElement?.classList.toggle('dsp-block');
    const currentLang = this.languageService.getCurrentLanguage();

    if (trElement && isToggle && currentLang) {
      trElement.childNodes.forEach((child) => {
        const childNode = child as HTMLElement;
        const icon = childNode.getElementsByTagName('i')[0];
        const id = childNode.getAttribute('id');
        if (id == currentLang && icon) {
          icon.classList.add('dsp-inline');
        } else {
          icon.classList.remove('dsp-inline');
        }
      });
    }
  }

  changeLanguage(language: string) {
    this.openTranslationMenu();
    this.languageService.use(language);
  }
}
