import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CheckInModel } from '@web-browser/entryou/model';
import { ServerResponseModel } from '@web-browser/shared/model';

@Injectable()
export class CheckInService {

  constructor(private http: HttpClient) {
  }

  checkIn = (checkIn: CheckInModel): Observable<ServerResponseModel> =>
    this.http.post<ServerResponseModel>('http://localhost:8083/api/check-in', checkIn, { observe: 'body' });
}
