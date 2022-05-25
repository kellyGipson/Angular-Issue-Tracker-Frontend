import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  email!: string;
  password!: string;
  passwordType: string = "password";
  showOrHide: string = "Show";
  errorEmail: boolean = false;
  errorPassword: boolean = false;
  errorEmailAndPassword: boolean = false;
  errorMessage!: string | null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.errorMessage$.subscribe(msg => this.errorMessage = msg);
  }

  ngOnDestroy(): void {
    this.authService.errorMessage$.subscribe().unsubscribe();
  }

  onLogin() {
    try {
      if((this.password === undefined || this.password === "") && (this.email === undefined || this.email === "")) throw new Error('Email and Password fields are required.');
      if(this.email === undefined || this.email === "") throw new Error('Email field is required.');
      if(this.password === undefined || this.password === "") throw new Error('Password field is required.');
      const userData = {
        email: this.email,
        password: this.password,
      }
      this.authService.login(userData);
    }
    catch(e: any) {
      this.handleErrors(e);
    }
  }

  hidePassword() {
    this.passwordType = (this.passwordType === "password") ? "text" : "password";
    this.showOrHide = (this.passwordType === "password") ? "Show" : "Hide";
  }

  handleErrors(e: any) {
    switch(e.message) {
      case "Email and Password fields are required.": {
        this.errorEmail = true;
        this.errorPassword = true;
        console.log(this.errorMessage)
        break;
      }
      case "Email field is required.": {
        this.errorEmail = true;
        break;
      }
      case "Password field is required.": {
        this.errorPassword = true;
        break;
      }
    }
    this.errorMessage = e.message;
  }

  resetErrors() {
    this.errorEmail = false;
    this.errorPassword = false;
    this.errorEmailAndPassword = false;
    this.errorMessage = null;
  }
}
