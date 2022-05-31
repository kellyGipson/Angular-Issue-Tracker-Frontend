import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFetchIssue } from 'src/app/interfaces/ISSUE';
import { IssueService } from 'src/app/services/issues/issues.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  firstName!: string;
  todoIssues: IFetchIssue[] = [];
  inProgressIssues: IFetchIssue[] = [];
  inReviewIssues: IFetchIssue[] = [];
  doneIssues: IFetchIssue[] = [];

  constructor(
    private uiService: UiService,
    private router: Router,
    private issuesService: IssueService,
  ) {}

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
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

  onClickIssue(issue: IFetchIssue) {
    this.router.navigate(['issue-tracker/issues/', issue.id])
  }
}
