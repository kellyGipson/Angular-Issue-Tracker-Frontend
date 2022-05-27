import { Component, OnInit } from '@angular/core';
import { IFetchGroup } from 'src/app/interfaces/GROUP';
import { IFetchIssue } from 'src/app/interfaces/ISSUE';
import { GroupService } from 'src/app/services/group/group.service';

import { IssueService } from 'src/app/services/issues/issues.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issuesList!: IFetchIssue[];
  groupList!: IFetchGroup[];

  constructor(
    private issuesService: IssueService,
    private groupService: GroupService,
    private uiService: UiService
  ) { }

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    this.issuesService.getIssues().subscribe(issues => this.issuesList = issues);
    this.groupService.getGroups().subscribe(groups => this.groupList = groups)
  }

}
