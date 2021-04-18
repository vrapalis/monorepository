import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IAuthEnvironment, SignUpModel } from '@web-browser/shared/auth/model';
import { Observable, throwError } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient, @Inject('environment') private env: IAuthEnvironment) {
  }

  signUp = (signUpModel: SignUpModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>(`${this.env.apiGatewayHostUrl}/sign-up`,
      signUpModel, { observe: 'body' });

  signUpConfirm = (id: string): Observable<ServerResponseModel> => {
    const params = new HttpParams().set('id', id);
    return this.http.get<ServerResponseModel>(`${this.env.apiGatewayHostUrl}/sign-up`, {
      observe: 'body',
      params
    }).pipe(
      catchError(err => throwError(err.error))
    );
  };
}
