import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  // TODO EXTERNALIZE ENVIRONMENT
  signUp = (signUpModel: SignUpModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>(`http://localhost:8080/api/users/sign-up`,
      signUpModel, { observe: 'body' });
}
