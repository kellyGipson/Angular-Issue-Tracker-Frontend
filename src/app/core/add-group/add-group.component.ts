import { Component, OnInit } from '@angular/core';
import { ICreateGroup } from 'src/app/interfaces/GROUP';
import { Router } from '@angular/router';

import { GroupService } from 'src/app/services/group/group.service';
import { UiService } from 'src/app/services/ui/ui.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  groupName: string = "";
  userId!: number;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private uiService: UiService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.uiService.checkLoggedIn();
    if(this.authService.getId() !== -1) {
      this.userId = this.authService.getId();
    }
  }

  createGroup() {
    const newGroup: ICreateGroup = {
      groupName: this.groupName
    }
    this.groupService.createGroup(newGroup).subscribe();
    this.router.navigate(['/issue-tracker/issues/add'])
  }
}
