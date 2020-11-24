import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  public piedata: Object[];
  public legendSettings: Object;
  public chartLabel: object;
  count: string;
  list: any = [];
  localStorageData: any = [];
  arrayval: any = [];
  other: any;
  k: any;
  malecount: any;
  femalecount: any;
  gender: any = [];
  headers = ["NO", "Name", "Gender", "Email", "Number", "Message"];
  // rows = [
  //   {
  //     "NO": "1",
  //     "Name": "sarag",
  //     "Gender": "M",
  //     "Email": "sar@gmail",
  //     "Number": "123",
  //     "Message": "hai"

  //   },
  //   {
  //     "NO": "2",
  //     "Name": "sarag",
  //     "Gender": "M",
  //     "Email": "sar@gmail",
  //     "Number": "123",
  //     "Message": "hai"

  //   },
  //   {
  //     "NO": "3",
  //     "Name": "sarag",
  //     "Gender": "M",
  //     "Email": "sar@gmail",
  //     "Number": "123",
  //     "Message": "hai"

  //   },
  //   {
  //     "NO": "4",
  //     "Name": "sarag",
  //     "Gender": "M",
  //     "Email": "sar@gmail",
  //     "Number": "123",
  //     "Message": "hai"

  //   }

  // ]
  userRegistrationForm;
  constructor() {

  }

  ngOnInit(): void {
    this.localStorageData = localStorage.getItem("registrationData");
    this.arrayval = JSON.parse(this.localStorageData)
    console.log("loacl sotorage data=", this.arrayval);
    console.log(this.arrayval.length);


    var k = this.arrayval.length;
    console.log("length=", k);
    // var gender=this.arrayval[0].gender;
    // console.log(gender);
    // if(gender=="female"){
    //   console.log("female");

    // }


    // for (let i = 0; i < k; i++) {
    //   this.gender[i] = this.arrayval[i];
    // }
    // var i=1;
    // console.log(this.gender[i].name);
    for (let malecount = 0, femalecount = 0, j = 1; j <= k; j++) {
      var i=j;
      console.log(this.gender[i].gender);
      // if (this.gender[i].gender) {
      //   this.malecount = malecount + 1;
      // }
    }


    // for (let malecount = 0,  femalecount=0, j = 0; j <= k; j++) {
    //   var gender=this.arrayval[j].gender;
    //   if (gender==="male") {
    //     this.malecount = malecount + 1;
    //   }
    //   else {
    //     this.femalecount = femalecount + 1;
    //   }
    // }

    // console.log("female=", this.femalecount);
    // console.log("male=", this.malecount);




    // this.piedata = [{ x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
    // this.piedata = [{ name: 'Apple', Value: 37, text: '37%' }, { name: 'Orange', value: 17, text: '17%' }];

    // this.legendSettings = {
    //   visible: false
    // };
  }

}
