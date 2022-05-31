import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UiService } from 'src/app/services/ui/ui.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ILocalStorageUser, IUser } from 'src/app/interfaces/USER';
import { IssueService } from 'src/app/services/issues/issues.service';
import { IFetchIssue } from 'src/app/interfaces/ISSUE';
import { faTicket, faLayerGroup, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons'

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

  currentTime: number = new Date().getHours();
  timeGreeting!: string;

  // Icons
  faTicket: IconDefinition = faTicket;
  faLayerGroup: IconDefinition = faLayerGroup;
  faUser: IconDefinition = faUser;

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
    this.timeGreeting = this.getGreeting();
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

  getGreeting(): string {
    if(this.currentTime < 12) {
      return "Good Morning";
    } else if(this.currentTime > 12 && this.currentTime < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening"
    }
  }

  handleCardClick(cardTitle: string): void {
    let url: string = "/";
    switch(cardTitle) {
      case "View All Issues": url = "issue-tracker/issues"; break;
      case "View All Groups": url = "issue-tracker/group"; break;
      case "View My Profile": url = "issue-tracker/profile"; break;
    }
    this.uiService.navigateTo(url);
  }
}
