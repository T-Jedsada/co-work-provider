import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../config/app.constants';

@Injectable()
export class AuthService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
  }

  public login(uers) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'email-login';
    return this.http.post(this.actionUrl, uers);
  }

  public uploadImage(image) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'upload-image';
    return this.http.post(this.actionUrl, image);
  }

  public register(user) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'register';
    return this.http.post(this.actionUrl, user);
  }

  public sendEmail(email) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'send-email/confirm-singup';
    return this.http.post(this.actionUrl, email);
  }
}
