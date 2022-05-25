import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IRegUser } from 'src/app/interfaces/USER';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  passwordType: string = "password";
  showOrHide: string = "Show";

  errorFirstName!: boolean;
  errorLastName!: boolean;
  errorEmail!: boolean;
  errorPassword!: boolean;
  errorSpecialCharacters!: boolean;
  errorMessage!: string | null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    try {
      if(this.firstName === "") throw new Error('First Name field is required.');
      if(this.lastName === "") throw new Error('Last Name field is required.');
      if(this.email === "") throw new Error('Email field is required.');
      if(!this.email.includes('@') || !this.email.includes('.')) throw new Error('Please enter a valid email address.');
      if(this.password === "") throw new Error('Password field is required.');
      if(this.password.length < 8) throw new Error('Password is not long enough.');
      if(!this.authService.pwHasSpecialCharacters(this.password)) throw new Error('Your password must include at least one special character: !@#$%^&*');

      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email.toLowerCase(),
        password: this.password,
      }

      this.authService.register(userData);
    }
    catch(e: any) {
      console.log(e.message);
      this.handleErrors(e);
    }
  }

  hidePassword() {
    this.passwordType = (this.passwordType === "password") ? "text" : "password";
    this.showOrHide = (this.passwordType === "password") ? "Show" : "Hide";
  }

  handleErrors(e: any) {
    switch(e.message) {
      case 'Please enter a valid email address.': {
        this.errorEmail = true;
        break;
      }
      case 'First Name field is required.': {
        this.errorFirstName = true;
        break;
      }
      case 'Last Name field is required.': {
        this.errorLastName = true;
        break;
      }
      case 'Email field is required.': {
        this.errorEmail = true;
        break;
      }
      case 'Password is not long enough.': {
        this.errorPassword = true;
        break;
      }
      case 'Password field is required.': {
        this.errorPassword = true;
        break;
      }
      case 'Your password must include at least one special character: !@#$%^&*': {
        this.errorPassword = true;
        break;
      }
    }
    this.errorMessage = e.message;
  }

  resetErrors() {
    this.errorSpecialCharacters = false;
    this.errorFirstName = false;
    this.errorLastName = false;
    this.errorPassword = false;
    this.errorEmail = false;
    this.errorMessage = null;
  }
}
