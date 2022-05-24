import { HttpHeaders } from "@angular/common/http";


export const apiUrl = "http://192.168.1.187:8080";

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
