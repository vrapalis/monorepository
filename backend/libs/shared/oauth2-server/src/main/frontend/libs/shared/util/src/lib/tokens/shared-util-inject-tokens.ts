import { InjectionToken } from '@angular/core';
import { IEnv } from '@frontend/shared/model';

export const ENV_INJECT_TOKEN = new InjectionToken<IEnv>('Env inject token');
