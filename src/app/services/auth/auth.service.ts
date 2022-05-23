import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  specialChars: string = "!@#$%^&*";

  constructor() { }

  login(userData: {}) {
    // reach out to db, verify login info and set a flag in localstorage to stay logged in
  }

  register(userData: {}) {
    // reach out to db, create a user and set a flag in localstorage to stay logged in
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('loggedin', 'true');
  }

  pwHasSpecialCharacters(s: string) {
    for(let char of this.specialChars) {
      if(s.includes(char)) return true;
    }
    return false;
  }

}
