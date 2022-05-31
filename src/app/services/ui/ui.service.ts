import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { NavMenuInput } from './ui.constants';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private userIsLoggedIn: boolean = localStorage.getItem('loggedin') !== null;
  private subject = new Subject<boolean>();

  activeNavItemSource = new BehaviorSubject<string>(this.getActiveNavItem());
  activeNavItem$ = this.activeNavItemSource.asObservable();

  constructor(private router: Router) {}

  getActiveNavItem(): NavMenuInput {
    switch(window.location.pathname) {
      case "/issue-tracker": return "Home";
      case "/issue-tracker/issues": return "Issues";
      case "/issue-tracker/issues/add": return "Issues";
      case "/issue-tracker/group": return "Group";
      case "/issue-tracker/profile": return "Profile";
    }
    return "Home";
  }

  setActiveNavItem(navItem: NavMenuInput) {
    this.activeNavItemSource.next(navItem);
  }

  checkLoggedIn(): void {
    this.userIsLoggedIn = localStorage.getItem('loggedin') !== null;
    this.subject.next(this.userIsLoggedIn);
    if(!this.userIsLoggedIn) {
      this.router.navigate(['issue-tracker/login']); return;
    }
  }

  OnLogin(): Observable<boolean> {
    return this.subject.asObservable();
  }

  signOut() {
    localStorage.removeItem('loggedin')
    this.router.navigate(['/issue-tracker/login']);
  }

  navigateTo(dest: string, param?:number) {
    if(param) {
      this.router.navigate([dest, param]).then(() => this.setActiveNavItem(this.getActiveNavItem()));
    } else {
      this.router.navigate([dest]).then(() => this.setActiveNavItem(this.getActiveNavItem()));
    }
  }
}
