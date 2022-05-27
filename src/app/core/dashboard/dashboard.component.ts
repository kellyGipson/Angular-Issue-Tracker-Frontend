import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/services/ui/ui.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ILocalStorageUser, IUser } from 'src/app/interfaces/USER';
import { IssueService } from 'src/app/services/issues/issues.service';
import { IFetchIssue } from 'src/app/interfaces/ISSUE';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // State Variables
  firstName!: string;
  todoIssues: IFetchIssue[] = [];
  inProgressIssues: IFetchIssue[] = [];
  inReviewIssues: IFetchIssue[] = [];
  doneIssues: IFetchIssue[] = [];

  constructor(
    private uiService: UiService,
    private authService: AuthService,
    private router: Router,
    private issuesService: IssueService,
  ) {}

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    this.getFirstName();
    this.issuesService.getIssues()
      .subscribe(issues => {
        issues.forEach((issue) => {
          if(issue.issueStatus === "todo") this.todoIssues.push(issue);
          if(issue.issueStatus === "inProgress") this.inProgressIssues.push(issue);
          if(issue.issueStatus === "inReview") this.inReviewIssues.push(issue);
          if(issue.issueStatus === "done") this.doneIssues.push(issue);
        });
      });
  }

  getFirstName() {
    const localData = localStorage.getItem('loggedin');
    let localParsed: ILocalStorageUser;
    if(localData !== null){
      localParsed = JSON.parse(localData)
      this.authService.getFirstName(localParsed.id)
        .subscribe(firstName => this.firstName = firstName);
    }
  }

  onClickIssue(issue: IFetchIssue) {
    this.router.navigate(['issue-tracker/issues/', issue.id])
  }
}
