import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  formArray: any = [];
  // static setdata: any;


  constructor() { }
  public getdata() {

    this.formArray= JSON.parse(localStorage.getItem('registrationData'));
    return this.formArray;
  }
  // tslint:disable-next-line: typedef
  public setdata(arrayval) {
     this.formArray = JSON.parse(localStorage.getItem('registrationData'));
     console.log("form array from fomr", this.formArray);

  }
}
