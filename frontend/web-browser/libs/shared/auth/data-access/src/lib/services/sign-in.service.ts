import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInModel } from '@web-browser/shared/auth/model';
import { environment } from '../../../../../../../apps/entryou/app/src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) {
  }

  signIn(signIn: SignInModel): Observable<void> {
    return this.http.post(`http://localhost:8080/api/users/sign-in`, signIn, { observe: 'body' })
      .pipe(
        map(response => {
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(response['jwt']);
          console.log(JSON.parse(decodedToken['sub']))
        })
      );
  }
}
