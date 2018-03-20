import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { Configuration } from '../../config/app.constants';

@Injectable()
export class UsersService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
     this.actionUrl = _configuration.ServerWithApiUrl + 'register';
  }

  public get_users() {
     return this.http.get(this.actionUrl);
  }

  public add_users() {
      return this.http.get(this.actionUrl);
  }
}
