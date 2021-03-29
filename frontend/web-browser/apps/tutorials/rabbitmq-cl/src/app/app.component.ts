import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'web-browser-root',
  template: `
    <div>
      <h1 *ngIf='message; else noMessage;'>{{message}}</h1>
      <ng-template #noMessage>
        <h1>Nothing send yet!!!</h1>
      </ng-template>
      <input type='text' #input>
      <button (click)='publish(input.value)'>Publish</button>
    </div>
  `,

  styles: [`

  `]
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private rxStompService: RxStompService) {
  }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * 100)

    // this.rxStompService.watch('/topic/my-topic').subscribe(value => this.message = value.body);
    this.rxStompService.watch('/exchange/check-in-exchange/1').subscribe(value => this.message = value.body);

  }

  publish(value: string) {
    this.rxStompService.publish({ destination: '/topic/my-topic', body: value });
  }
}
