import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  @ViewChild("f") signupForm!: NgForm;

  defaultSelected = "advanced";

  submitted = false;

  userData = {
    email: '',
    password: '',
    selection: ''
  }


  onSubmit() {
    console.log(this.signupForm)
    this.submitted = true;
    this.userData.email = this.signupForm.value.email;
    this.userData.password = this.signupForm.value.password;
    this.userData.selection = this.signupForm.value.selection;
  }

}
