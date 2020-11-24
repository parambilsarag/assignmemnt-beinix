import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  RegArray: any = [{ name: 'sarag', age: 21 }, { name: 'unni', age: 22 }];
  constructor() { }
}
