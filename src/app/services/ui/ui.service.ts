import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private userIsLoggedIn: boolean = localStorage.getItem('loggedin') !== null;
  private subject = new Subject<boolean>();
  private activeNavItemSource = new BehaviorSubject<string>("Home");

  activeNavItem = this.activeNavItemSource.asObservable();

  constructor() {}

  setActiveNavItem(navItem: "Home" | "Issues" | "Group" | "Profile") {
    console.log(navItem);
    this.activeNavItemSource.next(navItem);
  }

  checkLoggedIn(): boolean {
    this.userIsLoggedIn = localStorage.getItem('loggedin') !== null;
    this.subject.next(this.userIsLoggedIn);
    return this.userIsLoggedIn;
  }

  OnLogin(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
