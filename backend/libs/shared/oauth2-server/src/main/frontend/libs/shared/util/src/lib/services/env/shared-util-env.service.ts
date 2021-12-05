import { Inject, Injectable } from '@angular/core';
import { ENV_INJECT_TOKEN } from '@frontend/shared/util';
import { IEnv } from '@frontend/shared/model';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilEnvService {

  constructor(@Inject(ENV_INJECT_TOKEN) public env: IEnv) {
  }
}
