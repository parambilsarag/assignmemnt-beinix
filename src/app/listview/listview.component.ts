import { Component, OnInit } from '@angular/core';
import { inside } from '@syncfusion/ej2-angular-charts';
import { DataserviceService } from '../dataservice.service';

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
  // malecount: any;
  // femalecount: any;
  gender: any = [];
  headers = ["NO", "Name", "Gender", "Email", "Number", "Message"];
  sortedColumn: string;
  userRegistrationForm;
  constructor() {

  }
  sortTable(n) {
    console.log("inside sort");
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    console.log(table);

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }


  }

  ngOnInit(): void {
    this.localStorageData = localStorage.getItem("registrationData");
    this.arrayval = JSON.parse(this.localStorageData)
    console.log("array val data=", this.arrayval);

    var k = this.arrayval.length;
    console.log("length=", k);

    var malecount = 0;
    var femalecount = 0;
    for (var i = 0; i < k; i++) {
      if (this.arrayval[i].gender == "male") {
        malecount = malecount + 1;
      }
      else {
        femalecount = femalecount + 1;
      }
    }
    console.log("female=", femalecount);
    console.log("male=", malecount);


    // for (let i = 0; i < k; i++) {
    //   this.gender[i] = this.arrayval[i];
    // }
    // var i=1;
    // console.log(this.gender[i].name);
    // for (let malecount = 0, femalecount = 0, j = 0; j <= k; j++) {
    //   var i=j;
    //   console.log(this.gender[i].gender);
    // if (this.gender[i].gender) {
    //   this.malecount = malecount + 1;
    // }
    // }


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




    this.piedata = [{ x: 'Sep', y: malecount, text: 'Sep: 21' }, { x: 'Oct', y: femalecount, text: 'Oct: 15' }];
    // this.piedata = [{ name: 'Apple', Value: 37, text: '37%' }, { name: 'Orange', value: 17, text: '17%' }];

    this.legendSettings = {
      visible: false
    };
    this.chartLabel = {
      visible: true,
      position: 'Inside',
    };
  }

}
