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
  constructor(public DataserviceService: DataserviceService) {


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
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
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

    var datafromservice = this.DataserviceService.getdata();
    console.log("data get method", datafromservice);


    this.localStorageData = localStorage.getItem("registrationData");
    this.arrayval = JSON.parse(this.localStorageData)
    console.log("array val data=", this.arrayval);

    // var k = datafromservice.length;

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
