import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StrapiService} from "@web/websites/shared/data-access";
import {IHome} from "@web/websites/vrapalis/model";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";
import {IWebsiteStrapiEnv} from "@web/websites/shared/model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class WebsitesVrapalisHomeDataAccessService extends StrapiService<IHome> {

  constructor(http: HttpClient, @Inject(VR_ENV_IN_TOKEN) private env: IWebsiteStrapiEnv) {
    super(http, env.strapiPath);
  }

  getSingle(path?: string): Observable<IHome> {
    return super.getSingle(path)
      .pipe(
        map(response => {
          response.profile.url = this.env.strapiPath + response.profile.url;
          response.projects.projects.forEach(project => project.picture.url = this.env.strapiPath + project.picture.url);
          return response;
        })
      );
  }
}
