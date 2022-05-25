import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  _apiUrl = "192.168.1.187:8080/issues"

  constructor(private http: HttpClient) { }

  getIssues(): Observable<IFetchIssue[]> {
    return this.http.get<IFetchIssue[]>(this._apiUrl);
  }

}
