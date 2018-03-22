import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../../config/app.constants';

@Injectable()
export class AuthService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
  }
  test: any = {};
  public login(uers) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'email-login';
    this.http.post(this.actionUrl, uers).subscribe(
      success => {
        this.test = success;
        console.log(this.test);
      }
    );
  }

  public register(user) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'register';
    this.http.post(this.actionUrl, user).subscribe(
      success => {
        return success;
      }
    );
  }

  public sendEmail(email) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'send-email/confirm-singup';
    return this.http.post(this.actionUrl, email);
  }

  public uploadImage(image) {
    this.actionUrl = this.configuration.ServerWithApiUrl + 'upload-image';
    return this.http.post(this.actionUrl, image);
  }
}
