import { HttpHeaders } from "@angular/common/http";


export const apiUrl = "https://angular-issue-tracker-backend.herokuapp.com";

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
