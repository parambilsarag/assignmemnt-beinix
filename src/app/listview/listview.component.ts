import { Component, OnInit } from '@angular/core';

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

  headers = ["NO", "Name", "Gender", "Email", "Number", "Message"];
  rows = [
    {
      "NO": "1",
      "Name": "sarag",
      "Gender": "M",
      "Email": "sar@gmail",
      "Number": "123",
      "Message": "hai"

    },
    {
      "NO": "2",
      "Name": "sarag",
      "Gender": "M",
      "Email": "sar@gmail",
      "Number": "123",
      "Message": "hai"

    },
    {
      "NO": "3",
      "Name": "sarag",
      "Gender": "M",
      "Email": "sar@gmail",
      "Number": "123",
      "Message": "hai"

    },
    {
      "NO": "4",
      "Name": "sarag",
      "Gender": "M",
      "Email": "sar@gmail",
      "Number": "123",
      "Message": "hai"

    }

  ]
  constructor() {


  }

  ngOnInit(): void {
    this.piedata = [{ x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
    // this.piedata = [{ name: 'Apple', Value: 37, text: '37%' }, { name: 'Orange', value: 17, text: '17%' }];

    this.legendSettings = {
      visible: false
    };
  }

}
