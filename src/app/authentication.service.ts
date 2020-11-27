import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public LoggedInStatus = false;

  constructor() { }

  setLoggedIn(value: boolean) {
    this.LoggedInStatus = value;
  }
  get IsLoggedIn() {
    return this.LoggedInStatus;
  }


}
