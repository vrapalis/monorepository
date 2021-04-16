import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckInModel, IEntryouEnvironment } from '@web-browser/entryou/model';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';

@Injectable()
export class CheckOutService {

  constructor(private http: HttpClient, @Inject('environment') private env: IEntryouEnvironment) {
  }

  checkOut = (checkOut: CheckInModel): Observable<ServerResponseModel> =>
    this.http.put<ServerResponseModel>(`${this.env.entryHostUrl}/api/check-outs`, checkOut, { observe: 'body' });
}
