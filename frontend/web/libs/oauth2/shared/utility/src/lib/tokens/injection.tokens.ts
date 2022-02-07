import { InjectionToken } from '@angular/core';
import { IOauth2Env } from '@web/oauth2/shared/model';

export const ENV_INJECTION_TOKEN = new InjectionToken<IOauth2Env>(
  'Env injection token'
);
