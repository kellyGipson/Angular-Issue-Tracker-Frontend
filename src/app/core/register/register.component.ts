import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { USER } from 'src/app/interfaces/USER';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  passwordType: string = "password";
  showOrHide: string = "Show";

  @Output() onRegisterForParent: EventEmitter<String[]> = new EventEmitter<String[]>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    if(this.firstName === null || this.firstName === undefined) throw new Error('no first name');
    if(this.lastName === null || this.lastName === undefined) throw new Error('no last name');
    if((this.email === null || this.email === undefined) && (this.password === null || this.password === undefined)) throw new Error('no email and no password');
    if(!this.email.includes('@') || !this.email.includes('.')) throw new Error('email is invalid');
    if(this.email === null || this.email === undefined) throw new Error('no email');
    if(this.password === null || this.password === undefined) throw new Error('no password');
    if(!this.authService.pwHasSpecialCharacters(this.password)) throw new Error('password has no special characters');

    const userData: USER = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }

    this.authService.register(userData);
  }

  hidePassword() {
    this.passwordType = (this.passwordType === "password") ? "text" : "password";
    this.showOrHide = (this.passwordType === "password") ? "Show" : "Hide";
  }
}
