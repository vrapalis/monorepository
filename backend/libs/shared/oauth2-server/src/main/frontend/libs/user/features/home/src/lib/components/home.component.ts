import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-home',
  template: `
    <p>
      users home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
