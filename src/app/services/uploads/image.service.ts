import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../config/app.constants';

@Injectable()
export class ImageService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'upload-image';
  }

  public add_image(image) {
    return this.http.post(this.actionUrl, image);
  }
}
