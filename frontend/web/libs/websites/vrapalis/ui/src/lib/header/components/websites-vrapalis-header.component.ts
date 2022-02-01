import {AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser, isPlatformServer, DOCUMENT} from "@angular/common";

@Component({
  selector: 'web-vr-header-component',
  template: `
    <header id="navbar" class="sh-ui-header">
      <div class="line"></div>

      <aside>
        <!--        <embed src="assets/images/logo.svg">-->
        <label>Vitali Rapalis</label>
      </aside>

      <div class="menu" (click)="toggleNavbar()">
        <div class="ham-menu"></div>
      </div>

      <nav>
        <ul>
          <li routerLink="home" routerLinkActive="active">
            <a>Home</a>
          </li>
          <li routerLink="projects" routerLinkActive="active">
            <a>Projects</a>
          </li>
          <li routerLink="blog" routerLinkActive="active">
            <a>Blog</a>
          </li>
          <li routerLink="contact" routerLinkActive="active">
            <a>Contact</a>
          </li>
          <li>
            <a class="bi bi-linkedin"></a>
          </li>
          <li>
            <a class="bi bi-github"></a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['websites-vrapalis-header.component.scss']
})
export class WebsitesVrapalisHeaderComponent implements AfterViewInit {
  private isToggled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: Document) {
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
        this.document.getElementById('navbar')?.classList.add('navbar-scrolled');
        this.document.getElementById('navbar')?.classList.add('navbar-scrolled-shrink');
      } else {
        this.document.getElementById('navbar')?.classList.remove('navbar-scrolled');
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
}
