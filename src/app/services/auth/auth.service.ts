import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { ILoginUser, IUser } from 'src/app/interfaces/USER';
import { apiUrl, httpOptions } from 'src/app/interfaces/API';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  specialChars: string = "!@#$%^&*";
  userData!: {};
  users!: IUser[];

  firstName: BehaviorSubject<string> = new BehaviorSubject<string>("");
  currentFirstName = this.firstName.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  setFirstName(firstName: string) {
    this.firstName.next(firstName);
  }

  login(userData: ILoginUser) {
    // reach out to db, verify login info and set a flag in localstorage to stay logged in
    this.http.get<IUser[]>(`${apiUrl}/users`)
      .forEach(users => { // grab the users from the observable
        users.forEach(user => { // iterate through the users
          if(user.email.toLowerCase() === userData.email.toLowerCase()) {
            if(user.password === userData.password) {
              this.firstName.next(user.firstName);
              localStorage.setItem('loggedin', JSON.stringify({ id: user.id, firstName: user.firstName }));
              this.router.navigate(['/']);
            } else {
              throw new Error("email and password doesn't match");
            }
          } else {
            throw new Error('no email matched');
          }
        });
      });
  }

  register(userData:any) {
    // reach out to db, create a user and set a flag in localstorage to stay logged in
    this.http.post(`${apiUrl}/users`, userData, httpOptions).subscribe(result => this.userData = result);
    this.firstName.next(userData.firstName);
    localStorage.setItem('loggedin', userData.id.toString());
    this.router.navigate(['/']);
  }

  pwHasSpecialCharacters(s: string) {
    for(let char of this.specialChars) {
      if(s.includes(char)) return true;
    }
    return false;
  }

}
