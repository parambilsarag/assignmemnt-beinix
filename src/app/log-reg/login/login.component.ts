import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.inintuserLoginform();
  }
  inintuserLoginform() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginuser(){

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return false;
    }
    console.log("name",this.loginForm.value.name);
    if((this.loginForm.value.name=="admin")&&(this.loginForm.value.password=="admin")){
      swal("Welcome!", "Good to go!", "success");
      this.router.navigateByUrl('window');
    }
    else{
      console.log("error");
      swal("Oops!", "Something went wrong!", "error");
    }

    //
  }

}
