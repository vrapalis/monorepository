import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';
import { ResetPasswordModel } from '@web-browser/shared/auth/model';

@Injectable()
export class ResetPasswordService {

  constructor(private http: HttpClient) {
  }

  reset = (email: ResetPasswordModel): Observable<ServerResponseModel> =>
    this.http.put<ServerResponseModel>('', email);

}
