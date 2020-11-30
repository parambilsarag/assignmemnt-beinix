import { Component, OnInit } from '@angular/core';
import { inside } from '@syncfusion/ej2-angular-charts';
import { DataserviceService } from '../dataservice.service';
import { RegistartionserviceService } from '../registartionservice.service';

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
  gender: any = [];
  headers = ["NO", "Name", "Gender", "Email", "Number", "Message"];
  sortedColumn: string;
  usersFromService: any;
  userRegistrationForm;
  keypairvalues: any;
  dummy: any = 0;

  constructor(public DataserviceService: DataserviceService, public RegistartionserviceService: RegistartionserviceService) {


  }
  //sorting table using name
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

  //sorting table by id
  sortTablebyid() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[0];
        y = rows[i + 1].getElementsByTagName("td")[0];
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
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

    //using service

    this.RegistartionserviceService.getdata().subscribe(data => {
      var jsondatafromservice = data;
      this.keypairvalues = JSON.stringify(data);
      console.log("key pair values", this.keypairvalues);
      var count = Object.keys(data).length;
      console.log("lenght is=", count);
      console.log("gender", data[0]);
      this.arrayval = JSON.parse(this.keypairvalues);
      console.log("array val", this.arrayval);

      var malecount = 0;
      var femalecount = 0;
      for (var i = 0; i < count; i++) {
        if (data[i].gender == "male") {
          malecount = malecount + 1;
        }
        else {
          femalecount = femalecount + 1;
        }
      }

      this.piedata = [{ x: 'Sep', y: malecount, text: 'Sep: 21' }, { x: 'Oct', y: femalecount, text: 'Oct: 15' }];
      this.legendSettings = {
        visible: false
      };
      this.chartLabel = {
        visible: true,
        position: 'Inside',
      };
    })



    // var datafromservice = this.DataserviceService.getdata();
    // console.log("data get method", datafromservice);
    // this.localStorageData = localStorage.getItem("registrationData");
    // this.arrayval = JSON.parse(this.localStorageData)
    // console.log("array val data=", this.arrayval);
    // var k = this.arrayval.length;
    // console.log("length=", k);

    // var malecount = 0;
    // var femalecount = 0;
    // for (var i = 0; i < k; i++) {
    //   if (this.arrayval[i].gender == "male") {
    //     malecount = malecount + 1;
    //   }
    //   else {
    //     femalecount = femalecount + 1;
    //   }
    // }
    // this.piedata = [{ x: 'Sep', y: malecount, text: 'Sep: 21' }, { x: 'Oct', y: femalecount, text: 'Oct: 15' }];



  }

}
