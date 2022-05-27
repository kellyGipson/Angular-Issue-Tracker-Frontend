import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { emptyIssue, IFetchIssue } from 'src/app/interfaces/ISSUE';
import { Router } from '@angular/router';

import { IssueService } from 'src/app/services/issues/issues.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issueId!: string;
  issue: IFetchIssue = emptyIssue;
  issueNextStatus: "todo" | "inProgress" | "inReview" | "done" = "todo";
  issuePrevStatus: "todo" | "inProgress" | "inReview" | "done" = "todo";

  confirmDelete: boolean = false;
  confirmPrev: boolean = false;
  confirmNext: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private issuesService: IssueService,
    private uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.uiService.activeNavItemSource.next("Add");
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id !== null) {
      this.issueId = id;
      this.issuesService.getIssue(this.issueId)
        .subscribe(issue => {
          this.issue = issue;
          this.issueNextStatus = this.issuesService.getNextIssueStatus(issue.issueStatus);
          this.issuePrevStatus = this.issuesService.getPreviousIssueStatus(issue.issueStatus);
        });
    }
  }

  nextIssueStatus(): void {
    const newIssue: IFetchIssue = {
      ...this.issue,
      issueStatus: this.issueNextStatus,
    }
    this.issuesService.updateIssue(newIssue).subscribe(issue => {
      this.issue = issue;
      this.issueNextStatus = this.issuesService.getNextIssueStatus(issue.issueStatus);
      this.issuePrevStatus = this.issuesService.getPreviousIssueStatus(issue.issueStatus);
    });
    this.confirmNext = false;
  }

  prevIssueStatus(): void {
    const newIssue: IFetchIssue = {
      ...this.issue,
      issueStatus: this.issuePrevStatus,
    }
    this.issuesService.updateIssue(newIssue).subscribe(issue => {
      this.issue = issue;
      this.issueNextStatus = this.issuesService.getNextIssueStatus(issue.issueStatus);
      this.issuePrevStatus = this.issuesService.getPreviousIssueStatus(issue.issueStatus);
    });
    this.confirmPrev = false;
  }

  deleteIssue(): void {
    this.issuesService.deleteIssue(this.issue).subscribe();
    this.router.navigate(["issue-tracker"]);
  }

  toggleWarningMessage(state: "delete" | "next" | "prev"): void {
    switch(state) {
      case "delete": this.confirmDelete = !this.confirmDelete; break;
      case "next": this.confirmNext = !this.confirmNext; break;
      case "prev": this.confirmPrev = !this.confirmPrev; break;
    }
  }
}
