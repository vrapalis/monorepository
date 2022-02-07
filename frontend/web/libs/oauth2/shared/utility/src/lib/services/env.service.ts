import {Inject, Injectable} from '@angular/core';
import {IOauth2Env} from "@web/oauth2/shared/model";
import {ENV_INJECTION_TOKEN} from "../tokens/injection.tokens";
import {AuthConfig} from "angular-oauth2-oidc";
import {OAUTH2_CODE_FLOW_CONFIG} from "../config/oauth2-config";

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor(@Inject(ENV_INJECTION_TOKEN) private env: IOauth2Env) {
  }

  getAuthConfig(): AuthConfig {
    const authConfig = OAUTH2_CODE_FLOW_CONFIG;
    authConfig.issuer = this.env.issuer;
    return authConfig;
  }
}
