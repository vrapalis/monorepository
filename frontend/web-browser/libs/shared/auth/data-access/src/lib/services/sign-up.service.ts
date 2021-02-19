import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SignUpModel } from '@web-browser/shared/auth/model';
import { Observable, of, throwError } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';
import { catchError } from 'rxjs/operators';

// TODO EXTERNALIZE ENVIRONMENT URL
@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  signUp = (signUpModel: SignUpModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>(`http://localhost:8080/api/users/sign-up`,
      signUpModel, { observe: 'body' });

  signUpConfirm = (id: string): Observable<ServerResponseModel> => {
    const params = new HttpParams().set('id', id);
    return this.http.get<ServerResponseModel>(`http://localhost:8080/api/users/sign-up`, {
      observe: 'body',
      params
    }).pipe(
      catchError(err => throwError(err.error))
    );
  };
}
