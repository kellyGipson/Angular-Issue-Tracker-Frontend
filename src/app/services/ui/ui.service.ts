import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private userIsLoggedIn: boolean = localStorage.getItem('loggedin') !== null;
  private subject = new Subject<boolean>();

  constructor() {}

  checkLoggedIn(): boolean {
    this.userIsLoggedIn = localStorage.getItem('loggedin') !== null;
    this.subject.next(this.userIsLoggedIn);
    return this.userIsLoggedIn;
  }

  OnLogin(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
