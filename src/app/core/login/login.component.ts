import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  passwordType: string = "password";
  showOrHide: string = "Show";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const userData = {
      email: this.email,
      password: this.password,
    }

    this.authService.login(userData);
  }

  hidePassword() {
    this.passwordType = (this.passwordType === "password") ? "text" : "password";
    this.showOrHide = (this.passwordType === "password") ? "Show" : "Hide";
  }

}
