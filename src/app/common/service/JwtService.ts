import { Injectable } from '@angular/core';


//providedIn:"root" due to global use
@Injectable({providedIn: "root"})
export class JwtService {

  constructor() {
  }

  getAccessToken(): string | null {
    const access_token = localStorage.getItem('Authorization');
    if (access_token == null) {
      return null;
    } else {
      return access_token;
    }
  }

  destroyToken() {
    localStorage.removeItem('ehr_jwt_token');
  }

  saveAccessToken(accessToken: string) {
    localStorage.setItem('ehr_jwt_token', accessToken);
    const access_token = localStorage.getItem('ehr_jwt_token');
    if (access_token == null) {
      throw new Error('access token is not saved');
    } else {
      return access_token;
    }
  }
}
