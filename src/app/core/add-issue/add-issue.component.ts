import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFetchGroup } from 'src/app/interfaces/GROUP';
import { ICreateIssue, IFetchIssue } from 'src/app/interfaces/ISSUE';

import { AuthService } from 'src/app/services/auth/auth.service';
import { IssueService } from 'src/app/services/issues/issues.service';
import { GroupService } from 'src/app/services/group/group.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { emptyUser, IUser } from 'src/app/interfaces/USER';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  // State Variables
  userData: IUser = emptyUser;
  issuesList: IFetchIssue[] = [];
  groupsList: IFetchGroup[] = [];

  // Form Variables
  createdByUserId: string = "";
  issueName: string = "";
  issueMessage: string = "";
  dateCreated!: Date;
  groupAssociated: string = "";
  issueStatus: "todo" = "todo";

  constructor(
    private authService: AuthService,
    private issuesService: IssueService,
    private groupService: GroupService,
    private uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    this.authService.getUserData().subscribe(userData => this.userData = userData);
    this.issuesService.getIssues().subscribe(issues => this.issuesList = issues);
    this.groupService.getGroups().subscribe(groups => this.groupsList = groups);
  }

  onSubmit() {
    const newIssue: ICreateIssue = {
      createdByUserName: `${this.authService.capitalizeName(this.userData.firstName)} ${this.authService.capitalizeName(this.userData.lastName)}`,
      issueName: this.issueName,
      issueMessage: this.issueMessage,
      dateCreated: new Date().toUTCString(),
      reactions: [],
      groupAssociated: this.groupAssociated,
      issueStatus: this.issueStatus,
    }
    this.issuesService.createIssue(newIssue).subscribe();
    this.issueName = "";
    this.issueMessage = "";
    this.groupAssociated = "";
    this.router.navigate(["issue-tracker/issues"])
  }
}
