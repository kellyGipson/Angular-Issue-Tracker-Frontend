import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { emptyGroup, ICreateGroup, IFetchGroup } from 'src/app/interfaces/GROUP';
import { HttpClient } from '@angular/common/http';
import { apiUrl, httpOptions } from 'src/app/interfaces/API';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  apiUrl: string = `${apiUrl}/groups`

  private groupsListSource: BehaviorSubject<IFetchGroup[]> = new BehaviorSubject<IFetchGroup[]>([emptyGroup]);
  groupsList$: Observable<IFetchGroup[]> = this.groupsListSource.asObservable();

  constructor(private http: HttpClient) { }

  getGroups(): Observable<IFetchGroup[]> {
    return this.http.get<IFetchGroup[]>(this.apiUrl);
  }

  createGroup(newGroup: ICreateGroup): Observable<ICreateGroup> {
    return this.http.post<ICreateGroup>(this.apiUrl, newGroup, httpOptions)
  }
}
