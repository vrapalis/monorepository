import { Inject, Injectable } from '@angular/core';
import { IEnv } from '@frontend/shared/model';
import { AuthConfig } from 'angular-oauth2-oidc';
import { ENV_INJECT_TOKEN } from '../../tokens/shared-util-inject-tokens';
import { OAUTH2_CODE_FLOW_CONFIG } from '../../config/oauth2-config';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilEnvService {

  constructor(@Inject(ENV_INJECT_TOKEN) public env: IEnv) {
  }

  getAuthConfig(): AuthConfig {
    const config = OAUTH2_CODE_FLOW_CONFIG;
    config.issuer = this.env.issuer;
    return config;
  }
}
