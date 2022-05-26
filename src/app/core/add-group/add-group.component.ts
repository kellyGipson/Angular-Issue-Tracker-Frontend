import { Component, OnInit } from '@angular/core';
import { ICreateGroup } from 'src/app/interfaces/GROUP';
import { Router } from '@angular/router';

import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  groupName: string = "";

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createGroup() {
    const newGroup: ICreateGroup = {
      groupName: this.groupName
    }
    this.groupService.createGroup(newGroup).subscribe();
    this.router.navigate(['/issue-tracker/issues/add'])
  }
}
