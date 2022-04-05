import {AfterViewInit, Component, ElementRef, Inject, ViewChild, ViewEncapsulation} from '@angular/core';
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IBaseEnv} from "@web/websites/shared/model";
import {TranslateService} from "@ngx-translate/core";
import * as gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {catchError} from "rxjs";

@Component({
  selector: 'web-home-component',
  template: `
    <div class="home-wrapper">
      <div class="home-start" #homeStart>
        <div class="home-start-wrapper">
          <img #homeImage>
          <section>
            <h1 innerHTML="{{'pages.home.header' | translate }}"></h1>
            <h3 innerHTML="{{'pages.home.subheader' | translate }}"></h3>
            <button class="btn-more" (click)="hr.scrollIntoView({ behavior: 'smooth'})">
              {{'pages.home.btn-more' | translate }}
            </button>
          </section>
        </div>
      </div>

      <div class="home-projects">
        <web-vr-project></web-vr-project>
      </div>
      <hr #hr>

      <p class="home-header-text vr-main-header animate__animated" innerHTML="{{'headerText' | translate}}" #homeText></p>

      <div class="home-services">
        <web-vr-more [services]="getServices() | async"></web-vr-more>
      </div>
    </div>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent implements AfterViewInit {
  @ViewChild('homeStart')
  private homeStart?: ElementRef<HTMLDivElement>;
  @ViewChild('homeImage')
  private homeImage?: ElementRef<HTMLImageElement>;
  @ViewChild('homeText')
  private homeText?: ElementRef<HTMLParagraphElement>;

  constructor(@Inject(VR_ENV_IN_TOKEN) private env: IBaseEnv, public translate: TranslateService) {
    gsap.gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    if (this.homeStart) {
      this.homeStart.nativeElement.style.background = this.env.production === true ?
        "url('/monorepository/assets/images/background.svg')" : "url('/assets/images/background.svg')";
    }

    if (this.homeImage) {
      this.homeImage.nativeElement.src = this.env.production === true ?
        "/monorepository/assets/images/home-start-me.png" : "/assets/images/home-start-me.png";
    }

    if(this.homeText) {
      gsap.gsap.from(this.homeText?.nativeElement, {
        // duration: 1,
        // opacity: 0,
        scrollTrigger: {
          trigger: this.homeText?.nativeElement,
          // toggleClass: 'animate__fadeIn',
          start: 'top 100%',
          end: 'bottom 70%',
          // markers: true,
          // scrub: true,
          toggleActions: "play none none restart"
        }
      });

    }
  }

  getServices() {
    return this.translate.get('services')
      .pipe(
        catchError(err => [])
      );
  }
}
