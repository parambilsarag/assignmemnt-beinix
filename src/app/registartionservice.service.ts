import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistartionserviceService {

  _url = 'http://localhost:3000/api/form';


  constructor(private _http: HttpClient) { }
  registerdata(userdata) {
    return this._http.post<any>(this._url, userdata);
  }
  getdata() {

    return this._http.get('http://localhost:3000/api/list');
  }
  newuserregistration(newregdata){
    return this._http.post<any>('http://localhost:3000/api/register', newregdata);
  }

  getLoginDetails() {
console.log("this method is caaling");

    return this._http.get('http://localhost:3000/api/logindetails');
  }

}
