import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckInModel, CheckInResponseModel, IEntryouEnvironment } from '@web-browser/entryou/model';
import { IPaginationModel } from '@web-browser/shared/model';

@Injectable()
export class CheckInService {

  constructor(private http: HttpClient, @Inject('environment') private env: IEntryouEnvironment) {
  }

  checkIn = (checkIn: CheckInModel): Observable<CheckInResponseModel> =>
    this.http.post<CheckInResponseModel>(`${this.env.apiGatewayHostUrl}/check-ins`, checkIn, { observe: 'body' });

  getPagedCheckIn = ({ guestId, page = 0, size = 4 }): Observable<IPaginationModel<any>> =>
    this.http.get<IPaginationModel<any>>(`${this.env.apiGatewayHostUrl}/check-ins/guests/${guestId}?page=${page}&size=${size}`,
      { observe: 'body' });
}
