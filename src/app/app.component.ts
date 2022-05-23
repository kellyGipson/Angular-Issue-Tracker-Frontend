import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue-tracker';

  constructor(private router: Router) {}

  hasRoute(route: string): boolean {
    return this.router.url === route
  }


}
