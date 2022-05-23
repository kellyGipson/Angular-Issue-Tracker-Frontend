import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private uiService: UiService, private router: Router) { }

  ngOnInit(): void {
    if(!this.uiService.checkLoggedIn()) this.router.navigate(['issue-tracker/login']);
  }

  signOut() {
    localStorage.removeItem('loggedin')
    this.router.navigate(['/']);
  }
}
