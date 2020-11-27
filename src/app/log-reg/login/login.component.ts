import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  localStorageData: any = [];
  constructor(private router: Router, public AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.inintuserLoginform();
  }
  inintuserLoginform() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginuser() {

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return false;
    }

    this.localStorageData = JSON.parse(localStorage.getItem("newuser"));
    console.log("login check data", this.localStorageData);
    console.log("form uname", this.loginForm.value.name);


    var length = this.localStorageData.length;
    var flag = false;
    var name;
    for (var i = 0; i < length; i++) {
      console.log(this.localStorageData[i].uname);

      // tslint:disable-next-line: max-line-length
      if ((this.localStorageData[i].uname === this.loginForm.value.name) && (this.localStorageData[i].password === this.loginForm.value.password)) {
        flag = true;
        name = this.localStorageData[i].uname;
      }
    }
    if (flag) {
      //swal
      Swal.fire({ title: 'welcome ' + name, text: 'Good To Go', icon: 'success', })
      this.AuthenticationService.setLoggedIn(true);
      this.router.navigateByUrl('window');
    }
    else {
      Swal.fire({ title: 'Unauthorized access', text: 'Please enter the correct loggin details', icon: 'error', })
    }

  }

}
