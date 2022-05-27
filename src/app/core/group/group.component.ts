import { Component, OnInit } from '@angular/core';

import { GroupService } from 'src/app/services/group/group.service';
import { IssueService } from 'src/app/services/issues/issues.service';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups: any[] = [];
  readonly issueDetailsUrl: string = "issue-tracker/issues/";
  readonly addGroupUrl: string = "issue-tracker/group/add";

  constructor(
    private groupService: GroupService,
    private issueService: IssueService,
    private uiService: UiService,
  ) {}

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    // first forEach grabs the groups, the second actually grabs the group itself
    // the getGroups function returns an array of groups
    this.groupService.getGroups().forEach(groups => groups.forEach(group => {
      // creating an object with the groups
      this.groups.push({ groupName: group.groupName, issues: [] });
      // first forEach grabs the issues, the second actually grabs the issue itself
      // the getIssues function returns an array of issues
      this.issueService.getIssues().forEach(issues => issues.forEach(issue => {
        // for each group and issue, if the groups match, add it to the group's issue array
        this.groups.forEach((group, idx) => {
          if(issue.groupAssociated === group.groupName) {
            this.groups[idx].issues.push(issue);
          }
        });
      }));
      console.log(this.groups)
    }));
  }

  navigateTo(path: string, param?: number) {
    this.uiService.navigateTo(path, param);
  }
}
