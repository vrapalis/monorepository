import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthEnvironment, SignInModel } from '@web-browser/shared/auth/model';
import { Observable } from 'rxjs';
import { SignInSuccessResponse } from '@web-browser/shared/model';

@Injectable()
export class SignInService {

  constructor(private http: HttpClient, @Inject('environment') private env: IAuthEnvironment) {
  }

  signIn(signInModel: SignInModel): Observable<SignInSuccessResponse> {
    return this.http.post<SignInSuccessResponse>(`${this.env.apiGatewayHostUrl}/sign-in`, signInModel,
      { observe: 'body' });
  }
}
