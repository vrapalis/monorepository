import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SignInModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';
import { SignInSuccessResponse } from '@web-browser/shared/model';

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) {
  }

  // TODO EXTERNALIZE ENVIRONMENT
  signIn(signInModel: SignInModel): Observable<SignInSuccessResponse> {
    return this.http.post<SignInSuccessResponse>(`http://localhost:8080/api/users/sign-in`, signInModel,
      { observe: 'body' });
  }
}
