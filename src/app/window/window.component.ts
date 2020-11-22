import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  form(){
    console.log("hii")
    this.router.navigateByUrl('form');
  }
  listview(){
    const users = JSON.parse(localStorage.getItem("registrationData") || "[]");
    console.log("hello")
    this.router.navigateByUrl('listview');
  }
}
