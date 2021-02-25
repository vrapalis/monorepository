import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';
import { ResetPasswordConfirmModel, ResetPasswordModel } from '@web-browser/shared/auth/model';

@Injectable()
export class ResetPasswordService {

  constructor(private http: HttpClient) {
  }

  reset = (email: ResetPasswordModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>(`http://localhost:8080/api/users/reset-password`, email);

  resetConfirm = (model: ResetPasswordConfirmModel): Observable<ServerResponseModel> => {
    return this.http.put<ServerResponseModel>(`http://localhost:8080/api/users/reset-password/confirm`, model);
  };
}
