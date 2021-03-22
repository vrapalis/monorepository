import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  InjectableRxStompConfig,
  RxStompService,
  rxStompServiceFactory
} from '@stomp/ng2-stompjs';

import { myRxStompConfig } from './my-rx-stomp.config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
