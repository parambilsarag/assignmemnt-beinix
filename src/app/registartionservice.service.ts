import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistartionserviceService {
  _url = 'http://loclahost:3000/api/form';


  constructor(private _http: HttpClient) { }
  registerdata(userdata) {
    return this._http.post<any>(this._url, userdata);
  }
}
