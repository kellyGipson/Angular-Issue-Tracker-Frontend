import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { ILoginUser, IUser } from 'src/app/interfaces/USER';
import { apiUrl, httpOptions } from 'src/app/interfaces/API';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  specialChars: string = "!@#$%^&*";
  userData!: {};
  users!: IUser[];

  // Observables
  firstNameSource: BehaviorSubject<string> = new BehaviorSubject<string>("");
  firstName$ = this.firstNameSource.asObservable();

  errorMessageSource: BehaviorSubject<string> = new BehaviorSubject<string>("");
  errorMessage$ = this.errorMessageSource.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  getFirstName(id: number): Observable<string> {
    this.http.get<IUser>(`${apiUrl}/users/${id}`)
    .forEach(user => {
      this.firstNameSource.next(user.firstName)
    });
    return this.firstNameSource;
  }

  setFirstName(firstName: string) {
    this.firstNameSource.next(firstName);
  }

  login(userData: ILoginUser): void {
    // reach out to db, verify login info and set a flag in localstorage to stay logged in
    this.http.get<IUser[]>(`${apiUrl}/users`)
      .forEach(users => { // grab the users from the observable
        users.forEach(user => { // iterate through the users
          if(user.email === userData.email.toLowerCase()) {
            if(user.password === userData.password) {
              this.firstNameSource.next(user.firstName);
              localStorage.setItem('loggedin', JSON.stringify({ id: user.id, firstName: user.firstName }));
              this.router.navigate(['/']);
              return;
            } else {
              this.errorMessageSource.next("Email and password mismatch.");
            }
          }
        });
      });
      this.errorMessageSource.next("Email and password mismatch.");
  }

  register(userData:any) {
    // reach out to db, create a user and set a flag in localstorage to stay logged in
    this.http.post(`${apiUrl}/users`, userData, httpOptions).subscribe(result => this.userData = result);
    this.firstNameSource.next(userData.firstName);
    localStorage.setItem('loggedin', userData.id);
    this.router.navigate(['/']);
  }

  pwHasSpecialCharacters(s: string) {
    for(let char of this.specialChars) {
      if(s.includes(char)) return true;
    }
    return false;
  }
}
