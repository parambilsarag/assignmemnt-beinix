import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterationForm;
  newRegister:any=[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initRegistrationForm()
  }

  initRegistrationForm() {
    this.RegisterationForm = new FormGroup({
      uname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      conpassword: new FormControl('', [Validators.required])
    });
  }
  register(){

    if (!this.RegisterationForm.valid) {
      this.RegisterationForm.markAllAsTouched();
      return false;
    }
    alert("Registration completed");
    this.RegisterationForm.reset();
    // this.router.navigateByUrl('');

  }

}
