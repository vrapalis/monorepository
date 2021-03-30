import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckInModel } from '@web-browser/entryou/model';
import { Observable } from 'rxjs';
import { ServerResponseModel } from '@web-browser/shared/model';

@Injectable()
export class CheckOutService {

  constructor(private http: HttpClient) {
  }

  checkOut = (checkOut: CheckInModel): Observable<ServerResponseModel> =>
    this.http.put<ServerResponseModel>(`http://localhost:8083/api/check-out`, checkOut, { observe: 'body' });
}
