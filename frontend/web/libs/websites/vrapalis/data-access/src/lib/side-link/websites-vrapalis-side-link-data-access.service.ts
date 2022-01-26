import {Inject, Injectable} from '@angular/core';
import {StrapiService} from "@web/websites/shared/data-access";
import {ISideLink, IWebsiteStrapiEnv} from "@web/websites/shared/model";
import {HttpClient} from "@angular/common/http";
import {VR_ENV_IN_TOKEN} from "@web/websites/vrapalis/utility";

@Injectable({providedIn: "root"})
export class WebsitesVrapalisSideLinkDataAccessService extends StrapiService<ISideLink> {

  constructor(http: HttpClient, @Inject(VR_ENV_IN_TOKEN) env: IWebsiteStrapiEnv) {
    super(http, '.');
  }
}
