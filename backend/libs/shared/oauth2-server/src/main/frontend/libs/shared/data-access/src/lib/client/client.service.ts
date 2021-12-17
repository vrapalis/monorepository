import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClientProvider } from '@frontend/shared/model';
import { SharedUtilEnvService } from '@frontend/shared/util';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, private envService: SharedUtilEnvService) {
  }

  getProviders = () =>
    this.http.get<Array<IClientProvider>>(`${this.envService.env.host}${this.envService.env.apiBasePath}/clients/providers`,
      { observe: 'body' });
}
