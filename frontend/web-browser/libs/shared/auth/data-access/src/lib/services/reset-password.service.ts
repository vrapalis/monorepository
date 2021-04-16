import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';
import { IAuthEnvironment, ResetPasswordConfirmModel, ResetPasswordModel } from '@web-browser/shared/auth/model';

@Injectable()
export class ResetPasswordService {

  constructor(private http: HttpClient, @Inject('environment') private env: IAuthEnvironment) {
  }

  reset = (email: ResetPasswordModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>(`${this.env.uaaHostUrl}/api/users/reset-password`, email);

  resetConfirm = (model: ResetPasswordConfirmModel): Observable<ServerResponseModel> => {
    return this.http.put<ServerResponseModel>(`${this.env.uaaHostUrl}/api/users/reset-password/confirm`, model);
  };
}
