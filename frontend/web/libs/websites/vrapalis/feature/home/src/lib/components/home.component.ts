import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../../../../../../apps/websites/vrapalis/src/environments/environment";

@Component({
  selector: 'web-home-component',
  template: `
    <div class='wrapper container row align-items-center justify-content-center justify-content-md-evenly'>
      <div class='profile col-12 col-md-5 row align-items-center'>
        <h3 class='col'>Image</h3>
      </div>
      <div class='description col-12 col-md-6'>
        <h3>Description</h3>
        <markdown [data]='markdown'></markdown>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 70vh;
    }

    .profile {
      height: 100%;
      border: 1px solid #cccccc;
    }

    .description {
      height: 100%;
      border: 1px solid #cccccc;
    }

  `]
})
export class HomeComponentComponent {
  markdown = '';

  constructor(private http: HttpClient) {
    this.http.get(`${environment.strapiPath}/home`, { observe: 'body' }).subscribe(response => {
      // @ts-ignore
      this.markdown = response.profileDescription;
    });
  }
}
