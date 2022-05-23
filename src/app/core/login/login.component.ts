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

}
