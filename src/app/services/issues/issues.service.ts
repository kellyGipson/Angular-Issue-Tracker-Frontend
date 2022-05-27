import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

import { emptyIssue, ICreateIssue, IFetchIssue } from '../../interfaces/ISSUE'
import { apiUrl, httpOptions } from 'src/app/interfaces/API';
import { IUser } from 'src/app/interfaces/USER';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  apiUrl: string = `${apiUrl}/issues/`

  // Observables
  issuesListSource: BehaviorSubject<IFetchIssue[]> = new BehaviorSubject<IFetchIssue[]>([emptyIssue]);
  issuesList$: Observable<IFetchIssue[]> = this.issuesListSource.asObservable();

  constructor(private http: HttpClient) { }

  getIssues(): Observable<IFetchIssue[]> {
    return this.http.get<IFetchIssue[]>(this.apiUrl);
  }

  getIssue(id: string | number) {
    return this.http.get<IFetchIssue>(`${this.apiUrl}${id}`);
  }

  createIssue(newIssue: ICreateIssue): Observable<ICreateIssue> {
    return this.http.post<ICreateIssue>(this.apiUrl, newIssue, httpOptions);
  }

  updateIssue(newIssue: IFetchIssue): Observable<IFetchIssue> {
    return this.http.put<IFetchIssue>(`${this.apiUrl}${newIssue.id}`, newIssue, httpOptions);
  }

  deleteIssue(newIssue: IFetchIssue) {
    return this.http.delete(`${this.apiUrl}${newIssue.id}`, httpOptions);
  }

  getNextIssueStatus(currentStatus: "todo" | "inProgress" | "inReview" | "done") {
    switch(currentStatus) {
      case "todo": return "inProgress";
      case "inProgress": return "inReview";
      case "inReview": return "done";
      case "done": return "done";
    }
  }

  getPreviousIssueStatus(currentStatus: "todo" | "inProgress" | "inReview" | "done") {
    switch(currentStatus) {
      case "todo": return "todo";
      case "inProgress": return "todo";
      case "inReview": return "inProgress";
      case "done": return "inReview";
    }
  }
}
