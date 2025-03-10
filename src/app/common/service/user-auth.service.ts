import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {JwtService} from './JwtService';
import { ApiService } from '../util/ApiService';

//providedIn:"root" due to global use
@Injectable({providedIn:"root"})
export class UserAuthService {

  constructor(private apiService: ApiService, 
    private http: HttpClient, private jwtService: JwtService) {}


  haveAuthentication():boolean {
    const token = this.jwtService.getAccessToken();
    return token !== null && token !== null && token !== '';
  }

  purgeAuth() {
    this.jwtService.destroyToken();
  }

  setAuth(accessToken: string) {
    this.jwtService.saveAccessToken(accessToken);
  }

  logout(): void {
    this.purgeAuth();

  }
}
