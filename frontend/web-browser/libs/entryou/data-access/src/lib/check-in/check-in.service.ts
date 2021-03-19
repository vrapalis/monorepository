import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class CheckInService {

  constructor(private http: HttpClient) {
  }

  checkIn = (): Observable<string> => of('hallo');
}
