import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IconDefinition, faHouseChimneyUser, faTicket, faLayerGroup, faUser } from '@fortawesome/free-solid-svg-icons';

import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  icon!: IconDefinition;
  currentActiveNavItem!: string;

  @Input() name!: string;

  constructor(private router: Router, private uiService: UiService) {
  }

  ngOnInit(): void {
    this.decideIcon();
    this.uiService.activeNavItem.subscribe(navItem => this.currentActiveNavItem = navItem);
    this.onClickFn("Home");
  }

  decideIcon() {
    switch(this.name) {
      case "Home": this.icon = faHouseChimneyUser; break;
      case "Issues": this.icon = faTicket; break;
      case "Group": this.icon = faLayerGroup; break;
      case "Profile": this.icon = faUser; break;
    }
  }

  onClickFn(name: string) {
    // sets the active nav item, then navigates to the corresponding page
    switch(name) {
      case "Home": {
        if(this.router.url !== "issue-tracker/" && this.currentActiveNavItem !== "Home") {
          this.uiService.setActiveNavItem(name);
          this.router.navigate(['issue-tracker']);
        }
        break;
      }
      case "Issues": {
        if(this.router.url !== "issue-tracker/issues" && this.currentActiveNavItem !== "Issues") {
          this.uiService.setActiveNavItem(name);
          this.router.navigate([`issue-tracker/${name.toLowerCase()}`]);
        }
        break;
      }
      case "Group": {
        if(this.router.url !== "issue-tracker/group" && this.currentActiveNavItem !== "Group") {
          this.uiService.setActiveNavItem(name);
          this.router.navigate([`issue-tracker/${name.toLowerCase()}`]);
        }
        break;
      }
      case "Profile": {
        if(this.router.url !== "issue-tracker/profile" && this.currentActiveNavItem !== "Profile") {
          this.uiService.setActiveNavItem(name);
          this.router.navigate([`issue-tracker/${name.toLowerCase()}`]);
        }
        break;
      }
    }
  }
}
