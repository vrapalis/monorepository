import {AfterViewInit, Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser, isPlatformServer, DOCUMENT} from "@angular/common";

@Component({
  selector: 'web-vr-header-component',
  template: `
    <nav id='navbar' class='navbar navbar-expand-md navbar-light fixed-top'>
      <div class='container-fluid nav-wrapper'>
        <a class='navbar-brand' href='#'>
          Vitali Rapalis
        </a>
        <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'
                (click)="toggleNavbar()">
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse justify-content-end text-center' id='navbarTogglerDemo02'>
          <ul class='navbar-nav mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link' aria-current='page' routerLinkActive="active" routerLink='home'>Home</a>
            </li>
            <!--   <li class='nav-item'>
                 <a class='nav-link active' aria-current='page' routerLink='blog'>Blog</a>
               </li>
               <li class='nav-item'>
                 <a class='nav-link active' aria-current='page' routerLink='projects'>Projects</a>
               </li>
               <li class='nav-item dropdown'>
                 <a class='nav-link dropdown-toggle' href='#' id='navbarScrollingDropdown' role='button'
                    data-bs-toggle='dropdown' aria-expanded='false'>
                   Language
                 </a>
                 <ul class='dropdown-menu dropdown-menu-end' aria-labelledby='navbarScrollingDropdown'>
                   <li><a class='dropdown-item' href='#'>GER</a></li>
                   <li><a class='dropdown-item' href='#'>ENG</a></li>
                   <li><a class='dropdown-item' href='#'>RUS</a></li>
                 </ul>
               </li>-->
          </ul>
        </div>
      </div>
    </nav>
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
      } else {
        this.document.getElementById('navbar')?.classList.remove('navbar-scrolled');
      }
    }
  }

  toggleNavbar() {
    if (isPlatformBrowser(this.platformId)) {
      this.isToggled = !this.isToggled;
      if (this.isToggled) {
        this.document.getElementById('navbar')?.classList.add('navbar-scrolled');
        this.document.body.style.overflow = "hidden";
      } else {
        this.document.body.style.overflow = "auto";
        if (this.document.body.scrollTop > 50 || this.document.documentElement.scrollTop > 50) {

        } else {
          this.document.getElementById('navbar')?.classList.remove('navbar-scrolled');
        }
      }
    }
  }
}
