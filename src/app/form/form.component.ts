import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmaIndicatorService } from '@syncfusion/ej2-angular-charts';
import { DataserviceService } from '../dataservice.service';
import { RegistartionserviceService } from '../registartionservice.service'


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
  copy: any;


  userRegistrationForm;
  constructor(public DataserviceService: DataserviceService, public RegistartionserviceService: RegistartionserviceService) {
  }
  ngOnInit(): void {
    this.initUserRegistrationForm();
    this.localStorageData = JSON.parse(localStorage.getItem("registrationData") || "[]");
    if (this.localStorageData.length > 0) {
      this.regArray = this.localStorageData;
    }
  }

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
    console.log("reg array", this.regArray);
    alert("Registration completed!");

    // this.userRegistrationForm.reset();
  }
  onSubmit() {
    console.log("for server", this.userRegistrationForm.value);
    this.RegistartionserviceService.registerdata(this.userRegistrationForm.value)
      .subscribe(
        response => console.log('success', response),
        error => console.error("Error", error)
      )
  }
  ngOnDestroy() {
    console.log("reg array", this.regArray);
    var arrayval = localStorage.setItem("registrationData", JSON.stringify(this.regArray));
    this.DataserviceService.setdata(arrayval);
  }


}
