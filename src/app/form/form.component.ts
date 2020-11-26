import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmaIndicatorService } from '@syncfusion/ej2-angular-charts';
import {DataserviceService} from '../dataservice.service';
import swal from 'sweetalert';

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
  copy:any;


  userRegistrationForm;
  constructor(public DataserviceService:DataserviceService) {
    // console.log("reg array from service",DataserviceService.RegArray);

    // this.copy=DataserviceService.RegArray;


  }

  ngOnInit(): void {

    // let formarrayadata=this.DataserviceService.setdata();
    // console.log("service call",formarrayadata);

    this.initUserRegistrationForm();
    this.localStorageData = JSON.parse(localStorage.getItem("registrationData") || "[]");
    if(this.localStorageData.length>0){
      this.regArray = this.localStorageData;
      // console.log("form array data",this.DataserviceService.formArray);
      // this.DataserviceService.formArray=["kevin"];

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
    console.log("reg array",this.regArray);



    swal("Registration completed!", "Good to go!", "success");

    this.userRegistrationForm.reset();

  }

  ngOnDestroy(){
    console.log("reg array",this.regArray);
    var arrayval=localStorage.setItem("registrationData", JSON.stringify(this.regArray));
    this.DataserviceService.setdata(arrayval);
  }


}
