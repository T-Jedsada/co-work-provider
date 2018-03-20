import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../config/app.constants';

@Injectable()
export class AuthService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'email-login';
  }

  public login(email, password) {
    return this.http.post(this.actionUrl, email);
  }

  public logout() {
    return this.http.get(this.actionUrl);
  }
}
