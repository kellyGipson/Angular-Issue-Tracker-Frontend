import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { USER } from 'src/app/interfaces/USER';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  specialChars: string = "!@#$%^&*";
  userData!: USER | null;

  firstName: BehaviorSubject<string> = new BehaviorSubject<string>(this.getFirstName());
  currentFirstName = this.firstName.asObservable();

  constructor(private router: Router) {}

  getFirstName() {
    const userDataJson = localStorage.getItem('userData');
    let userDataParsed;
    if(userDataJson === null) {
      return ""
    } else {
      userDataParsed = JSON.parse(userDataJson);
    }
    return userDataParsed.username;
  }

  login(userData: { email: string, password: string }) {
    // reach out to db, verify login info and set a flag in localstorage to stay logged in
    const userDataJson = localStorage.getItem('userData');
    if(userDataJson === null || userDataJson === undefined) return;

    const userDataParsed = JSON.parse(userDataJson);
    if(userData.email !== userDataParsed.email) throw new Error('email is not recognized');
    if(userData.password !== userDataParsed.password) throw new Error('Email and password do not match.');

    localStorage.setItem('loggedin', 'true');
    this.router.navigate(['/']);
  }

  register(userData: USER) {
    // reach out to db, create a user and set a flag in localstorage to stay logged in
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('loggedin', 'true');
    this.router.navigate(['/']);
  }

  pwHasSpecialCharacters(s: string) {
    for(let char of this.specialChars) {
      if(s.includes(char)) return true;
    }
    return false;
  }

}
