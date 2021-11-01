import { InjectionToken, NgModule } from '@angular/core';

export const INJECT_TOKEN = new InjectionToken<string>('');

@NgModule({
  providers: [{ provide: INJECT_TOKEN, useValue: '' }]
})
export class SharedUtilModule {
}
