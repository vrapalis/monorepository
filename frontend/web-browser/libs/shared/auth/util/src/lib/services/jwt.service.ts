import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';
import { UserModel } from '@web-browser/shared/auth/model';

@Injectable()
export class JwtService {
  static JWT_TOKEN_KEY = 'jwt-token';
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  /**
   * Save jwt token
   * @param jwtToken
   */
  saveJwtToken(jwtToken: string): Observable<void> {
    if (jwtToken == null) {
      throw new Error('Jwt token should not be null');
    }
    return of(localStorage.setItem(JwtService.JWT_TOKEN_KEY, jwtToken));
  }

  /**
   * Read jwt token
   */
  readJwtToken(): Observable<string> {
    return of(localStorage.getItem(JwtService.JWT_TOKEN_KEY)).pipe(
      tap(jwtToken => {
        if (jwtToken == null || this.jwtHelper.isTokenExpired(jwtToken)) {
          throw new Error('Jwt token not valid');
        }
      })
    );
  }

  createAuthUserFromJwtToken(): Observable<UserModel> {
    return this.readJwtToken().pipe(
      map(jwtToken => {
        const decodedUser = this.jwtHelper.decodeToken(jwtToken);
        const subject = JSON.parse(decodedUser['sub']);
        const user = {
          email: decodedUser['iss'],
          account: subject['account'],
          info: subject['info']
        } as UserModel;
        return user;
      })
    );
  }

  /**
   * Delete jwt token from storage.
   */
  deleteJwtToken = (): Observable<void> => {
    return of(localStorage.removeItem(JwtService.JWT_TOKEN_KEY));
  };
}
