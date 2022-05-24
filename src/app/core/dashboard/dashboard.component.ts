import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/services/ui/ui.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstName!: string;

  constructor(private uiService: UiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.uiService.checkLoggedIn()) {
      this.router.navigate(['issue-tracker/login']);
      return;
    }
    this.authService.currentFirstName.subscribe(name => this.firstName = name);
  }

  signOut() {
    localStorage.removeItem('loggedin')
    this.router.navigate(['/issue-tracker/login']);
  }
}
