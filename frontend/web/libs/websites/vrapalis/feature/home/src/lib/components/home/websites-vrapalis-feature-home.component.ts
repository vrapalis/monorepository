import {AfterViewInit, Component, ElementRef, Inject, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {IHome} from "@web/websites/vrapalis/model";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IBaseEnv} from "@web/websites/shared/model";

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
            <button class="btn-more" (click)="homeMore.scrollIntoView({ behavior: 'smooth'})">
              {{'pages.home.btn-more' | translate }}
            </button>
          </section>
        </div>
      </div>

      <!--      <article class="info">-->
      <!--        <p innerHTML="{{'pages.home.info' | translate }}"></p>-->
      <!--      </article>-->

      <div class="home-projects">
        <web-vr-project></web-vr-project>
      </div>

      <hr>

      <div class="home-more" #homeMore>
        <web-vr-more></web-vr-more>
      </div>
    </div>
  `,
  styleUrls: ['websites-vrapalis-feature-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponentComponent implements AfterViewInit {
  @Input() home!: IHome | null;
  @ViewChild('homeStart')
  private homeStart?: ElementRef<HTMLDivElement>;
  @ViewChild('homeImage')
  private homeImage?: ElementRef<HTMLImageElement>;

  constructor(@Inject(VR_ENV_IN_TOKEN) private env: IBaseEnv) {
  }

  ngAfterViewInit(): void {
    if (this.homeStart) {
      this.homeStart.nativeElement.style.background = this.env.production === true ?
        "url('/monorepository/assets/images/background.svg')" : "url('/assets/images/background.svg')";
    }

    if(this.homeImage) {
      this.homeImage.nativeElement.src = this.env.production === true ?
        "/monorepository/assets/images/home-start-me.png" : "/assets/images/home-start-me.png";
    }
  }
}
