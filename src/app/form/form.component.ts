import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmaIndicatorService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  name: any;
  email: any;
  contact: any;
  msg: any;
  count: any = 1;
  regArray: any = [];
  localStorageData: any = [];


  userRegistrationForm;
  constructor() { }

  ngOnInit(): void {
    this.initUserRegistrationForm();
    // this.localStorageData = JSON.parse(localStorage.getItem("registrationData") || "[]");
    // if(this.localStorageData.length>0){
    //   this.regArray=this.localStorageData;
    // }
  }
  // Register(value) {

  //   this.regArray.push(value);
  //   console.log(this.regArray);
  //   localStorage.setItem(this.count, JSON.stringify(value));
  //   alert("Registration completed")
  //   this.count += 1;
  //   console.log("count", this.count);

  // }

  initUserRegistrationForm() {
    this.userRegistrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      message: new FormControl(''),
    });
  }

  register() {

    if (!this.userRegistrationForm.valid) {
      this.userRegistrationForm.markAllAsTouched();
      return false;
    }

    this.regArray.push(this.userRegistrationForm.value);

    alert("Registration completed")
    this.userRegistrationForm.reset();
  }

  ngOnDestroy(): void {
    // console.log(this.regArray);
    // localStorage.setItem("registrationData", JSON.stringify(this.regArray));
  }


}
