import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeelingsService {

  url_api: string = 'http://54.196.43.91:3000/raccoon/'
  url_getAll: string = this.url_api + 'feelings';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url_getAll);
  }
}
