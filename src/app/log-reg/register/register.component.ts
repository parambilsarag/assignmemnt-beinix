import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistartionserviceService } from '../../registartionservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterationForm;
  newRegister: any = [];
  constructor(private router: Router, public RegistartionserviceService: RegistartionserviceService) { }

  ngOnInit(): void {
    this.initRegistrationForm();
    this.newRegister = JSON.parse(localStorage.getItem("newuser") || "[]");
  }

  initRegistrationForm() {
    this.RegisterationForm = new FormGroup({
      uname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      conpassword: new FormControl('', [Validators.required])
    });
  }
  register() {

    if (!this.RegisterationForm.valid) {
      this.RegisterationForm.markAllAsTouched();
      return false;
    }


    this.newRegister.push(this.RegisterationForm.value);
    console.log("new registerd users", this.newRegister);
    localStorage.setItem("newuser", JSON.stringify(this.newRegister));
    console.log("registerd user in local storage",localStorage.getItem("newuser"));
    Swal.fire({ title: 'Registration completed', text: 'Good To Go', icon: 'success'})
    // this.RegisterationForm.reset();
    // this.router.navigateByUrl('');
  }
  onSubmit(){
    console.log("for server",this.RegisterationForm.value);
    this.RegistartionserviceService.newuserregistration(this.RegisterationForm.value)
      .subscribe(
        response => console.log('success', response),
        error => console.error("Error", error)
      )
  }

}
