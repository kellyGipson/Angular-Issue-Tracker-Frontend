import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;

  @Output() onRegisterForParent: EventEmitter<String[]> = new EventEmitter<String[]>();

  constructor(private authService: AuthService, private uiService: UiService) { }

  ngOnInit(): void {
  }

  onRegister() {
    if((this.email === null || this.email === undefined) && (this.password === null || this.password === undefined)) {
      throw new Error('no email and no password');
    }
    if (!this.email.includes('@') || !this.email.includes('.')) {
      throw new Error('email is invalid');
    }
    if(this.email === null || this.email === undefined) {
      throw new Error('no email');
    }
    if(this.password === null || this.password === undefined) {
      throw new Error('no password');
    }
    if(!this.authService.pwHasSpecialCharacters(this.password)) {
      throw new Error('password has no special characters');
    }

    const userData = {
      email: this.email,
      password: this.password,
    }

    this.authService.register(userData);
    this.uiService.checkLoggedIn();

  }

}
